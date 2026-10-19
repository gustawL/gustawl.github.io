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

Ta podstrona opisuje co zainstalować i ew. skonfigurować by móc cieszyć się keepassxc, oraz logowaniem się na swoje zabezpieczone konto z yubikey. Niestety nie miałem szczęścia z firefox, więc zdecydowałem się zrobić upgrade do wersji `-current` ponieważ ta wersja ma librewolf ... dziwne ale tutaj komunikacja przez fido działała i mogłem się normalnie zalogować na swoje konto google. 

Pomijam celowo instalację samego systemu operacyjnego - to potrafi nawet małpa.

Na wszelki wypadek leniwy pf.conf po świeżej instalacji:
```
block in all
pass out keep state
```

Trzeba pamiętać też o doas.conf przekopiowanym z examples. Znajdziemy go komendą
```
doas find / -name doas.conf
```

## Wszystko co potrzebne

### Librewolf
Z racji, że obecnie librewolf jest jedynie na `-current` ... to musimy zaktualizować wszystko z 7.9 do `current` (Po aktualizacji będzie reboot). 
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

I teraz najważniejsze. [[openbsd-keepassxc-yubikey|Wyłączamy daemona pcscd]].
```
doas rcctl disable pcscd && doas rcctl stop pcscd
```

#### Uprawnienia
Wiem, że to rozwiązanie nie jest eleganckie. Za pomocą `usbdevs` oraz `dmesg` sprawdź, do którego węzła `usb` i `ugen` jest podpięty Twój yubikey. W systemie OpenBSD dostępny jest demon `hotplugd` do automatyzacji takich zadań związanych z urządzeniami usb, jednak na ten moment nie mam czasu na pisanie skryptów automatyzujących.

Póki co ustal to ręcznie. Aby keepassxc widział Twój klucz, konkretne pliki urządzeń `usb` i `ugen` wymagają odpowiednich uprawnień. Po zakończeniu pracy możesz przecież przywrócić pierwotne uprawnienia. Podaję przykład dla `ugen1` i `usb2`:
```
doas chmod 660 /dev/ugen1*
```
```
doas chmod 660 /dev/usb2
```

Po nadaniu uprawnień baza keepassxc poprawnie wykrywa klucz. Jeśli tak jest to możesz śmiało instalować Librewolf - działa out of box. Jak wspomniałem, nie miałem tyle szczęścia z firefox np... a powinno działać tak samo. 
## Słowo końcowe

Przeglądarka nie potrzebuje dodatkowych uprawnień ponieważ ona komunikuje się poprzez `/dev/fido` (zakładam, że yubikey w przeglądarce używasz do zabezpieczania swojego konta). Nie instalowałem CCID ani nic dodatkowego do działania. Tyle wystarczy by działać z skonfigurowanym kluczem yubikey. 