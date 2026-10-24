---
date: 2026-10-19
title: OpenBSD postinstalacja
id: "20261019135805"
tags:
  - openbsd
  - keepassxc
  - yubikey
  - cyberbezpieczeństwo
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _24.10.2026_

## Wstęp

Ta podstrona opisuje co zainstalować i ew. skonfigurować by móc cieszyć się keepassxc, oraz logowaniem się na swoje zabezpieczone konto z yubikey w przeglądarce librewolf na OpenBSD (nie sprawdzałem firefoxa).

> [!note] Od wersji OpenBSD 8.0, librewolf jest w repo.
> Źródło: https://librewolf.net/installation/openbsd/

Jako `root` (i tak doas.conf musi być skonfigurowany dla `wheel`, zmień `tty`).
Na wszelki wypadek sprawdź reguły w domyślnym pf.conf po świeżej instalacji:
```
set skip on lo0
block in all
block return in on ! lo0 proto tcp to port 6000:6010
block return out log quick proto {tcp udp} user _pbuild
pass out all keep state
```

To powinno na start wystarczyć. Pierwsza, trzecia i czwarta reguła jest już w pf zapisana.

Test konfiguracji po edycji (gdybyś jeszcze coś dodał lub źle zapisał):
```
pfctl -nf /etc/pf.conf
```

Przeładowanie reguł firewalla:
```
pfctl -f /etc/pf.conf
```

Trzeba pamiętać też o doas.conf przekopiowanym z examples.
```
cp /etc/examples/doas.conf /etc/
```

## Po zalogowaniu na wheel

Po zalogowaniu na konto `wheel`. 
### Keepassxc i yubikey

Osobną sprawą jest keepassxc. Są różne "flavors", i jeżeli nie potrzebujesz integracji z przeglądarką (co jest mądrzejsze) to interesuje Ciebie wersja keepassxc-yubikey. Jeżeli wpisujesz samo `pkg_add keepassxc-yubikey` - to nie wystarczy, musisz wyszukać pełną nazwę:
```
pkg_info -Q keepassxc
```

Po instalacji konkretnej wersji keepassxc -> teraz najważniejsze. [[openbsd-keepassxc-yubikey|Wyłączamy daemona pcscd]].
```
doas rcctl disable pcscd && doas rcctl stop pcscd
```
#### Zmiana właściciela
Wiem, że to rozwiązanie nie jest eleganckie. Za pomocą `usbdevs` [^2] oraz `dmesg` sprawdź, do którego węzła `usb` i `ugen` jest podpięty Twój yubikey. W systemie OpenBSD dostępny jest daemon `hotplugd` [^1] do automatyzacji takich zadań związanych z urządzeniami usb, jednak na ten moment nie mam czasu na pisanie skryptów automatyzujących.

Póki co ustal to ręcznie. Aby keepassxc widział Twój klucz, musisz zmienić właściciela (usb2, ugen1 to przykłady!):
```
doas chown $USER /dev/ugen1* /dev/usb2
```

Źródło: 
- Rafael Sadowski, *OpenBSD Hackathon Japan 2025*, https://rsadowski.de/posts/2025/j2k25-japan-openbsd-hackathon/#yubikey-integration-example

Po zmianie właściciela (i wyłączonym pcscd) baza keepassxc poprawnie wykrywa klucz. Jeśli tak jest to możesz śmiało instalować Librewolf - działa out of box (i co najważniejsze - jest "sanboxowana" z pledge [^3] i unveil [^4]).

Przeglądarka nie potrzebuje dodatkowych akcji ponieważ ona komunikuje się poprzez `/dev/fido` [^5] (zakładam, że yubikey w przeglądarce używasz do zabezpieczania swojego konta albo potrzebujesz się na nie zalogować - a masz zabezpieczone własnym kluczem yubi).

Nie instalowałem CCID ani nic dodatkowego do działania. Tyle wystarczy by działać z kluczem yubikey w OpenBSD.
#### Automatyzacja
Da radę również zautomatyzować cały proces poprzez wspomnianego daemona `hotplugd`.
Nie musisz ustawiać właściciela za każdym razem kiedy wpinasz klucz albo go wyciągasz.
##### Mój skrypt
Napisałem prosty skrypt automatyzujący (nie jest najlepszy - ale to niestety najlepsze co mi się udało wyiskać). Dla jednego zalogowanego usera powinno wystarczyć.

Przed użyciem czynimy skrypt wykonywalnym:
```
doas chmod u+x /etc/hotplug/attach /etc/hotplug/detach
```
Włączamy hotplugd oczywiście:
```
doas rcctl enable hotplugd && doas rcctl start hotplugd
```

- attach: https://github.com/gustawL/scripts/blob/master/openBSD/hotplug-yubikey/attach
- detach: https://github.com/gustawL/scripts/blob/master/openBSD/hotplug-yubikey/detach
##### Wersja z Consolekit
Skrypt z bloga R. Sadowskiego
- https://rsadowski.de/posts/2025/j2k25-japan-openbsd-hackathon/#kde-session-management-improvements
Jeżeli nie przeszkadza Ci consolekit (lub potrzebujesz) to spróbuj jego metodę. Niżej przypominajki z mojej próby (mi zadziałał).

W artykule jest:
```
${LOCALBASE}/bin/ck-launch-session ${LOCALBASE}/bin/startplasma-x11
```

Ja z racji, że domyślnie używam fvwm (testowałem na świeżej instalce), zamieniłem to na:
```
exec ck-launch-session fvwm
```

zmieniłem też w wspomnianym skrypcie polecenia `chown`, na moim systemie to były inne węzły usb i ugen. 
Oprócz tego - pamiętajcie by włączyć dbus jeżeli zdecydujecie się przetestować:
```
doas rcctl enable messagebus && doas rcctl start messagebus
```

Zarówno detach i attach musi mieć taki sam początek skryptu (już wiem dlaczego detach nie przywracał mi właściciela grupy!):
/etc/hotplug/detach
```
#!/bin/sh

DEVCLASS=$1
DEVNAME=$2

case $DEVCLASS in
0) DEVCLASS_NAME="generic" ;;
1) DEVCLASS_NAME="CPU" ;;
2) DEVCLASS_NAME="disk drive" ;;
3) DEVCLASS_NAME="network interface" ;;
4) DEVCLASS_NAME="tape device" ;;
5) DEVCLASS_NAME="serial interface" ;;
esac

case $DEVNAME in
fido*)
	/etc/hotplug/ck-session-notify "hotplugd" "" "Detachment" \
		"$DEVCLASS_NAME: Yubico YubiKey OTP+FIDO+CCID" 5000
	chown root /dev/ugen1.*
	chown root /dev/usb2
	;;
*) ;;
esac
```

Co jest w tym najlepsze? dodałem usera który nie ma administracyjnych uprawnień i skrypt zadziałał.
Urządzenie nie ma potrzeby być wpięte cały czas, user jeśli nie potrzebuje czegoś to nie powinien mieć zbyt szerokich uprawnień. Mi się ten skrypt podoba - przyznaje uprawnienia do węzłów gdy jest to konieczne. Jest nawet sterylniej pracować na użytkowniku bez praw admina.

Wszystkie testy robiłem na normalnej maszynie.
#### QEMU, Yubikey Passthrough
Jeżeli guest nie czyta Ci klucza, spróbuj [[qemu#Yubikey passthrough]]

[^1]: OpenBSD manuals, *hotplugd (8)* https://man.openbsd.org/hotplugd.8

[^2]: OpenBSD manuals, *usbdevs (8)*, https://man.openbsd.org/usbdevs.8

[^3]: OpenBSD manuals, *pledge (2)*, https://man.openbsd.org/pledge.2

[^4]: OpenBSD manuals, *unveil (2)*, https://man.openbsd.org/unveil

[^5]: OpenBSD manuals, *fido (4)*, https://man.openbsd.org/fido.4
