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
> [!info] Ostatnia aktualizacja _19.10.2026_

## Wstęp

Ta podstrona opisuje co zainstalować i ew. skonfigurować by móc cieszyć się keepassxc, oraz logowaniem się na swoje zabezpieczone konto z yubikey w przeglądarce na OpenBSD. Niestety nie miałem szczęścia z firefox, więc zdecydowałem się zrobić upgrade do wersji `-current` ponieważ ta wersja ma librewolf. Dziwne ale w przypadku tej przeglądarki, komunikacja przez fido [^5] działała i mogłem się normalnie zalogować na swoje konto google. 

> [!warning] `-current` to gałąź rozwojowa!
> Ta notatka to nie poradnik - robię to głównie dla siebie.

Pomijam celowo instalację samego systemu operacyjnego - to potrafi nawet małpa.

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

## Wszystko co potrzebne

Po zalogowaniu na konto `wheel`. 
### Librewolf
Z racji, że obecnie librewolf jest jedynie na `-current` ... to musimy zaktualizować wszystko z 7.9 do `-current` (Po aktualizacji będzie reboot). 
```
doas sysupgrade -s 
```

Po wszystkim na wszelki wypadek aktualizujemy wszystkie programy
```
doas pkg_add -u
```

Zanim zainstalujesz przeglądarkę... sprawdź keepassxc i nim się zajmij na początek.
### Keepassxc

Osobną sprawą jest keepassxc. Są różne "flavors", i jeżeli nie potrzebujesz integracji z przeglądarką (co jest mądrzejsze) to interesuje Ciebie wersja keepassxc-yubikey. Jeżeli wpisujesz samo `pkg_add keepassxc-yubikey` - to nie wystarczy, musisz wyszukać pełną nazwę:
```
pkg_info -Q keepassxc
```

Po instalacji konkretnej wersji keepassxc -> teraz najważniejsze. [[openbsd-keepassxc-yubikey|Wyłączamy daemona pcscd]].
```
doas rcctl disable pcscd && doas rcctl stop pcscd
```

#### Uprawnienia
Wiem, że to rozwiązanie nie jest eleganckie. Za pomocą `usbdevs` [^2] oraz `dmesg` sprawdź, do którego węzła `usb` i `ugen` jest podpięty Twój yubikey. W systemie OpenBSD dostępny jest daemon `hotplugd` [^1] do automatyzacji takich zadań związanych z urządzeniami usb, jednak na ten moment nie mam czasu na pisanie skryptów automatyzujących.

Póki co ustal to ręcznie. Aby keepassxc widział Twój klucz, konkretne pliki urządzeń `usb` i `ugen` wymagają odpowiednich uprawnień. Po zakończeniu pracy możesz przecież przywrócić pierwotne uprawnienia. Podaję przykład dla `ugen1` i `usb2`:
```
doas chmod 660 /dev/ugen1*
```
```
doas chmod 660 /dev/usb2
```

Po nadaniu uprawnień (i wyłączonym pcscd) baza keepassxc poprawnie wykrywa klucz. Jeśli tak jest to możesz śmiało instalować Librewolf - działa out of box (i co najważniejsze - jest sanboxowana z pledge [^3] i unveil [^4]). Jak wspomniałem, nie miałem tyle szczęścia z firefox np... a powinno działać tak samo.
## Słowo końcowe

Przeglądarka nie potrzebuje dodatkowych uprawnień ponieważ ona komunikuje się poprzez `/dev/fido` (zakładam, że yubikey w przeglądarce używasz do zabezpieczania swojego konta albo potrzebujesz się na nie zalogować - a masz zabezpieczone własnym kluczem yubi). Nie przywracałem natomiast uprawnień węzłów i ... na ten moment nie jestem w stanie potwierdzić czy one mają jakieś znaczenie dla przeglądarki. 
Obstawiam, że nie. 

Nie instalowałem CCID ani nic dodatkowego do działania. Tyle wystarczy by działać z skonfigurowanym kluczem yubikey. Jeżeli ktoś potrzebuje jedynie pokonfigurować sobie klucze ssh czy sam yubikey, zrobić zabezpieczoną kluczem bazę w keepassxc...
Wystarczą te uprawnienia i OpenBSD w wersji stabilnej (nie ma potrzeby aktualizacji do `-current`, jedynie librewolf był mi potrzebny do testów).

[^1]: OpenBSD manuals, *hotplugd (8)* https://man.openbsd.org/hotplugd.8

[^2]: OpenBSD manuals, *usbdevs (8)*, https://man.openbsd.org/usbdevs.8

[^3]: OpenBSD manuals, *pledge (2)*, https://man.openbsd.org/pledge.2

[^4]: OpenBSD manuals, *unveil (2)*, https://man.openbsd.org/unveil

[^5]: OpenBSD manuals, *fido (4)*, https://man.openbsd.org/fido.4
