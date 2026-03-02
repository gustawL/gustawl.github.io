---
date: 2025-12-17
title: Git
id: "20251217234835"
tags:
  - "#git"
---
> [!info] Ostatnia aktualizacja: _02.03.2026_

## .gitconfig
Co ustawiam?
``` config
[user]
name = imię i nazwisko
email = mój adres który używam do gita
signingkey = ~/.ssh/klucz_sk.pub

[init]
# Preferuję "master"
defaultBranch = master

[gpg]
# Commity podpisuję z yubikey
gpgsign = true
```
## Problemy
Notatki - problemy które napotkałem / przerobiłem.
- [[git-commits-problem|Podpisywanie commitów]]
