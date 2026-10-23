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
> [!info] Ostatnia aktualizacja _23.10.2026_

## Wstęp

Ta podstrona opisuje co zainstalować i ew. skonfigurować by móc cieszyć się keepassxc, oraz logowaniem się na swoje zabezpieczone konto z yubikey w przeglądarce librewolf na OpenBSD (nie sprawdzałem firefoxa).

> [!note] Od wersji OpenBSD 8.0, librewolf jest w repo.
> Źródło: https://librewolf.net/installation/openbsd/

Jako `root` (i tak doas.conf musi być skonfigurowany dla `wheel`, zmień `tty`).
Na wszelki wypadek leniwy dodatek do reguł w domyślnym pf.conf po świeżej instalacji:
```
block in all
pass out keep state
```

test konfiguracji po edycji:
```
pfctl -nf /etc/pf.conf
```

przeładowanie reguł firewalla:
```
pfctl -f /etc/pf.conf
```

Trzeba pamiętać też o doas.conf przekopiowanym z examples. Znajdziemy go komendą
```
find / -name doas.conf
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

Póki co ustal to ręcznie. Aby keepassxc widział Twój klucz, musisz zmienić właściciela:
```
doas chown $USER /dev/ugen1* /dev/usb2
```

Źródło: 
- Rafael Sadowski, *OpenBSD Hackathon Japan 2025*, https://rsadowski.de/posts/2025/j2k25-japan-openbsd-hackathon/#yubikey-integration-example

Po zmianie właściciela (i wyłączonym pcscd) baza keepassxc poprawnie wykrywa klucz. Jeśli tak jest to możesz śmiało instalować Librewolf - działa out of box (i co najważniejsze - jest "sanboxowana" z pledge [^3] i unveil [^4]).

Przeglądarka nie potrzebuje dodatkowych akcji ponieważ ona komunikuje się poprzez `/dev/fido` [^5] (zakładam, że yubikey w przeglądarce używasz do zabezpieczania swojego konta albo potrzebujesz się na nie zalogować - a masz zabezpieczone własnym kluczem yubi).

Nie instalowałem CCID ani nic dodatkowego do działania. Tyle wystarczy by działać z skonfigurowanym kluczem yubikey. Jeżeli ktoś potrzebuje jedynie pokonfigurować sobie klucze ssh czy sam yubikey, zrobić zabezpieczoną kluczem bazę w keepassxc.

#### Automatyzacja
Da radę również zautomatyzować cały proces poprzez wspomnianego daemona `hotplugd`. 
Testowałem skrypt z bloga R. Sadowskiego (to jest ten sam link co powyżej ale sekcja wyżej "KDE session Management Improvements") - działał, ale detach nie przywrócił mi grupy do `root`. Być może coś pominąłem ale `attach` działał. Wymagany jest consolekit!

Nie można zapomnieć o:
```
doas chmod +x /etc/hotplug/attach /etc/hotplug/detach
```

oraz uruchomienie samego daemona:
```
doas rcctl enable hotplugd && doas rcctl start hotplugd
```

Domyślnie w podanym rozwiązaniu jest:
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

Co jest w tym najlepsze? dodałem usera który nie ma administracyjnych uprawnień i skrypt zadziałał.
Gdyby udało mi się tak wykombinować żeby jednak `detach` z powrotem zmieniał właściciela grupy to można powiedzieć, że jest perfect.

[^1]: OpenBSD manuals, *hotplugd (8)* https://man.openbsd.org/hotplugd.8

[^2]: OpenBSD manuals, *usbdevs (8)*, https://man.openbsd.org/usbdevs.8

[^3]: OpenBSD manuals, *pledge (2)*, https://man.openbsd.org/pledge.2

[^4]: OpenBSD manuals, *unveil (2)*, https://man.openbsd.org/unveil

[^5]: OpenBSD manuals, *fido (4)*, https://man.openbsd.org/fido.4
