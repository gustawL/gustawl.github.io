---
date: 2026-10-07
title: gitconfig
id: "20261007184608"
tags:
  - git
  - ai-assisted
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _09.10.2026_

## Czym jest gitconfig?

``.gitconfig`` - plik tekstowy przechowujący preferowane ustawienia użytkownika, który pozwala dostosować zachowanie oraz zautomatyzować wybrane akcje w systemie kontroli wersji Git. 

### Snippet

``` config
[user]
        name = imię i nazwisko, ew. nick
        email = twoj.email@example.com
        
# Ścieżka do klucza SSH podpisującego
        signingkey = ~/.ssh/twój_klucz_sk

[init]
# Wymuszenie nazwy gałęzi głównej (preferuję 'master')
        defaultBranch = master

[gpg]
# Użycie SSH zamiast tradycyjnego GPG do podpisów
        format = ssh

[commit]
# Automatyczne podpisywanie wszystkich commitów
        gpgsign = true

```

## Opis sekcji, parametrów

### \[user\]
Ta sekcja w konfiguracji odpowiada za definiowanie Twojej tożsamości użytkownika – w tym również tożsamości kryptograficznej.
### \[init\]
Ta sekcja decyduje o tym, jak mają zachowywać się nowo tworzone projekty w momencie, gdy wpisujesz komendę `git init`. Najczęściej używa się jej do zdefiniowania domyślnej nazwy głównej gałęzi (np. main zamiast tradycyjnego master).
#### Dlaczego zmieniono nazwę na main?
Historycznie Git tworzył główną gałąź pod nazwą `master`. Zmiana zaczęła być masowo wdrażana w drugiej połowie 2020 roku pod naciskiem politycznie poprawnych aktywiszczy. Platformy takie jak GitHub ustawiły nazwę `main` jako domyślną dla wszystkich nowo tworzonych repozytoriów od 1 października 2020 roku.

Głównym powodem było odejście od terminologii budzącej skojarzenia z niewolnictwem (relacja master/slave) na rzecz bardziej neutralnych, takich „inkluzywnych określeń”.

Co ciekawe nikt przy zdrowych zmysłach oraz logicznym umyśle nie odbierał słowa `master` z takim skojarzeniem - był to wymysł poprawnie politycznej propagandy. Skomentował to również Kenny (znany jako Mental outlaw).

Źródła: 
- 林慧 (Wai Lin), *Linus Torvalds Has Merged Inclusive-Terminology Rules Into The Linux Kernel Git Tree*, Linux Reviews, https://linuxreviews.org/Linus_Torvalds_Has_Merged_Inclusive-Terminology_Rules_Into_The_Linux_Kernel_Git_Tree
- 林慧 (Wai Lin), *Intel Is Pushing For 1984-Style Revision Of Words Allowed In Linux Kernel Development And Documentation*, Linux Reviews, https://linuxreviews.org/Intel_Is_Pushing_For_1984-Style_Revision_Of_Words_Allowed_In_Linux_Kernel_Development_And_Documentation#The_Proposal
### \[gpg\]
Ta sekcja odpowiada za wybór technologii i narzędzi, które mają zostać użyte do szyfrowania i weryfikacji podpisów cyfrowych. Nazwa pochodzi od standardu GnuPG (GPG), ale dzisiaj ta sekcja zarządza również innymi formatami (np. ssh).
### \[commit\]
Ta sekcja definiuje globalne reguły i automatyzacje, które mają się wykonać w momencie zatwierdzania kodu (czyli podczas wykonywania komendy `git commit`).
## Oficjalna dokumentacja
- https://git-scm.com/docs/git-config.html#Documentation/git-config.txt-gitconfig