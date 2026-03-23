---
date: 2026-03-23
title: dotfiles
id: "20260323011553"
tags:
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja: _23.03.2026_

https://github.com/gustawL/dotfiles

Najkrócej: dotfiles = osobiste pliki konfiguracyjne systemu i narzędzi etc.

Nazwa wzięła się od plików konfiguracyjnych które zaczynają się od kropki np. `.bashrc`, `.zshrc`, `.gitconfig`, `.vimrc`.

Służą do przechowywania ustawień programów i środowiska użytkownika. Przykłady:
- aliasy w terminalu,
- motyw shella,
- ustawienia programów,
- konfigurację edytora,
- skróty, zmienne środowiskowe, wygląd prompta.

To ustawienia środowiska pracy. Gdy zmieniasz komputer albo system, możesz przenieść dotfiles i szybko odtworzyć swój setup.

W praktyce ludzie często wrzucają swoje dotfiles na GitHuba, żeby:
- mieć kopię zapasową,
- łatwo odtwarzać środowisko,
- wersjonować zmiany,
- automatyzować konfigurację nowego systemu.

> [!warning] Uwaga!
> nie każdy plik konfiguracyjny (czy jakaś konkretna linia w tym pliku) to coś, co warto publikować. Czasem w konfiguracji mogą być tokeny, klucze API, ścieżki prywatne albo inne wrażliwe dane.