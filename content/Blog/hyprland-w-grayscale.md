---
date: 2026-03-25
title: Prosty shader ekranowy w Hyprland
id: "20260325235529"
tags:
  - hyprland
  - glsl
  - grafika-komputerowa
hideFolderListing: true
noindex: false
link: "[[moja-podroz-z-linuxem]]"
status: to review
---
> [!info] Ostatnia aktualizacja: _11.04.2026_

Link do fragmentu kodu [^1] :<br> https://github.com/gustawL/dotfiles/commit/9bc84b63cb57b67e1f008f0d7a00de4ce03fcb3f

Prosty fragment shader w hyprland.
## Skąd pomysł?
Legendy mówią, że wszytko na ekranie w "grayscale" coś daje.

Jaskrawe kolory, wysoki kontrast i animacje w aplikacjach są projektowane tak, aby zwiększać zauważalność bodźców i angażować uwagę... Ja nie zabiegam o uwagę. 

Usunięcie jaskrawych barw może subiektywnie zmniejszyć obciążenie wzrokowe, ale sama skala szarości nie usuwa niebieskiego światła (tu lepiej działa `wlsunset`). Suchość i zmęczenie oczu częściej zależą od jasności ekranu, kontrastu, czasu patrzenia i rzadkiego mrugania.

Podobno tryb monochromatyczny może pośrednio pomagać w utrzymaniu normalnego rytmu dobowego i lepszego snu, szczególnie jeśli jest stosowany wieczorem i sprawia, że ekran mniej angażuje.

Nie wiem, czy "grayscale" ma jakieś mega korzyści...

Vaxry w swoim repo ma fajny przykładowy shader (blue light). https://code.hyprland.org/hyprwm/Hyprland/src/tag/v0.46.2/example/screenShader.frag#:~:text=Hyprland/example/screenShader.,com/hyprwm/Hyprland%20synced%20now
## Efekt wizualny (screen)
![[2026-03-26_051508.png|700]]

[^1]: Update (inne wagi etc): https://github.com/gustawL/dotfiles/commit/39629c4499616e6c4fd49bbefbd329b275291ef3
