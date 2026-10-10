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

Pliki niemutowalne (immutable files) to pliki, których nie można modyfikować, usuwać, zmieniać ich nazwy ani tworzyć do nich dowiązań twardych (hard links). Blokada ta obowiązuje wszystkich użytkowników, w tym również konto administratora (root). Mechanizm ten działa na poziomie systemu plików i jest niezależny od standardowych uprawnień RWX (chmod).
## Po co ustawiać taki atrybut?
Przykładowo na serwerze ze statyczną konfiguracją sieciową, poprzez nadanie atrybutu plikowi `/etc/resolv.conf` (będącemu zwykłym plikiem) zabezpieczamy się przed lokalnym podmienieniem adresów DNS (DNS hijacking).

> [!warning] Należy uwzględnić kontekst systemowy: w środowiskach wykorzystujących dynamiczne zarządzanie siecią (np. `systemd-resolved`) plik `/etc/resolv.conf` bywa dowiązaniem symbolicznym, co uniemożliwia lub zakłóca stosowanie tej metody.
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