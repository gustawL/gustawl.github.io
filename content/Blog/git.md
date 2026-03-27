---
date: 2025-12-17
title: Git
id: "20251217234835"
noindex: true
tags:
status:
---
> [!info] Ostatnia aktualizacja _27.03.2026_

## .gitconfig

Jest to plik konfiguracyjny który na repo nie chcę wrzucać ...
ale coś na kształt "snippetu", "szablonu" sobie opiszę. [^1]

``` config
[user]
name = imię i nazwisko
email = mój adres który używam do gita
signingkey = ~/.ssh/klucz_sk

[init]
# Preferuję "master"
defaultBranch = master

[gpg]
gpgsign = true
```

[^1]: Notka: Sprawdź czy można załączyć osobny plik. Na remote się wrzuci to co "można", a na podstronie z git wypiszę co tam ewentualnie muszę sobie pod "siebie" ustawić. 