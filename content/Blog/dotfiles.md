---
date: 2026-03-23
title: dotfiles
id: "20260323011553"
tags:
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja: _23.03.2026_
**Repozytorium:** [github.com/gustawL/dotfiles](https://github.com/gustawL/dotfiles)
## Dotfiles?

W skrócie: to pliki konfiguracyjne systemu i narzędzi. Nazwa pochodzi od plików zaczynających się od kropki (np. `.bashrc`, `.gitconfig`, `.vimrc`), które w systemach unixowych są domyślnie ukryte. Choć nie każda konfiguracja musi mieć tę kropkę w nazwie, mówimy po prostu "dotfiles".

Służą do przechowywania ustawień środowiska użytkownika, takich jak:

- **Aliasy i funkcje** w terminalu,
    
- **Motyw shella** i wygląd prompta,
    
- **Konfiguracja edytora** (skróty, wtyczki),
    
- **Zmienne środowiskowe** i ustawienia konkretnych programów.
    

## Dlaczego ludzie je publikują?

Zamiast konfigurować wszystko od zera przy kaprysie instalacji (np. w maszynie wirtualnej), możesz po prostu sklonować swoje repozytorium. Wziąć co potrzebujesz i mniej roboty z głowy. Publiczne przechowywanie dotfiles pozwala na:

1. **Błyskawiczną replikację** - szybkie odtworzenie na host, maszynie wirtualnej etc.
	Wyjątki istnieją np. Guix, Nix.
2. **Wersjonowanie** – każda zmiana w ustawieniach ma swoją historię, więc łatwo cofniesz błędy.
3. **Kopię zapasową** – Twoje dopieszczone środowisko pracy jest bezpieczne w chmurze.
4. **Automatyzację** – łatwiejsze wdrożenie skryptów instalacyjnych (np. poprzez `stow`, własne skrypty).

> [!warning] Uwaga! Nie wszystko nadaje się do upublicznienia. Przed wrzuceniem plików upewnij się, że nie zawierają one **tokenów, kluczy API, prywatnych ścieżek** ani innych wrażliwych danych.