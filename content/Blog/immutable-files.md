---
date: 2026-10-10
title: Pliki niemutowalne
id: "20261010014818"
tags:
  - linux
  - ai-assisted
  - cmd
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _10.10.2026_

Pliki niemutowalne (immutable files) to pliki, których nie można modyfikować, usuwać, zmieniać ich nazwy ani tworzyć do nich dowiązań twardych (hard links). Blokada operacji wejścia/wyjścia dotyczy wszystkich użytkowników – w tym konta administratora (root), dopóki flaga nie zostanie zdjęta. Mechanizm ten działa na poziomie systemu plików (m.in. ext4, XFS) i to nie jest to samo co prawa dostępu (POSIX DAC).
## Po co ustawiać taki atrybut?
Przykładowo na serwerze ze statyczną konfiguracją sieciową, nadanie atrybutu zwykłemu plikowi `/etc/resolv.conf` zabezpiecza go przed niepożądanym nadpisaniem przez procesy lokalne (np. klientów DHCP) lub złośliwe oprogramowanie modyfikujące adresy serwerów DNS.

> [!warning] Należy uwzględnić kontekst systemowy: w środowiskach wykorzystujących dynamiczne zarządzanie siecią (np. `systemd-resolved`), `/etc/resolv.conf` bywa dowiązaniem symbolicznym do pliku na `tmpfs`, co uniemożliwia zastosowanie tej flagi lub powoduje błędy demonów sieciowych stosujących zapis atomowy.
## Jak ustawić?
Do zmiany atrybutów plików używamy `chattr` (change attribute).
Do podglądu atrybutów plików służy `lsattr` (list attributes).

Nadanie atrybutu:
``` sh
chattr +i /etc/resolv.conf
```

Sprawdzenie statusu pliku:
``` sh
lsattr /etc/resolv.conf
```

Wynik polecenia `lsattr` składa się z ciągu flag atrybutów oraz ścieżki pliku.
Obecność litery `i` potwierdza, że plik jest niemutowalny.

Usunięcie atrybutu:
``` sh
chattr -i /etc/resolv.conf
```
