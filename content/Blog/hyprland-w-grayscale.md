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
link: "[[glowny-host]]"
---
> [!info] Ostatnia aktualizacja: _30.03.2026_

Link do fragmentu kodu [^1] :<br> https://github.com/gustawL/dotfiles/commit/9bc84b63cb57b67e1f008f0d7a00de4ce03fcb3f

Hyprland udostępnia zmienną konfiguracyjną `decoration:screen_shader`, która jako wartość przyjmuje ścieżkę do własnego shadera nakładanego na końcu renderowania pulpitu.  
Oznacza to, że plik z shaderem (np. `grayscale.glsl`) jest shaderem GLSL używanym jako końcowy efekt post-processingu obrazu.
## Skąd pomysł?
Legendy mówią, że wszytko na ekranie w "grayscale" coś daje. Nie mam stanowiska, ale pojawił się chociaż pomysł na zrobienie czegoś (w tym wypadku chciałem czegoś co w prosty sposób zaaplikuje taki "filtr" na ekranie). 

Jaskrawe kolory, wysoki kontrast i animacje w aplikacjach są projektowane tak, aby zwiększać zauważalność bodźców i angażować uwagę... Ja nie zabiegam o uwagę. 

Usunięcie jaskrawych barw może subiektywnie zmniejszyć obciążenie wzrokowe, ale sama skala szarości nie usuwa niebieskiego światła (tu lepiej działa `wlsunset`). Suchość i zmęczenie oczu częściej zależą od jasności ekranu, kontrastu, czasu patrzenia i rzadkiego mrugania.

Podobno tryb monochromatyczny może pośrednio pomagać w utrzymaniu normalnego rytmu dobowego i lepszego snu, szczególnie jeśli jest stosowany wieczorem i sprawia, że ekran mniej angażuje. Sam w sobie nie działa jednak tak jak obniżenie jasności i ocieplenie temperatury barwowej.

Nie wiem, czy "grayscale" ma jakieś mega korzyści... ale „potrzeba matką wynalazku”.

Vaxry w swoim repo ma fajny przykładowy shader (blue light). https://code.hyprland.org/hyprwm/Hyprland/src/tag/v0.46.2/example/screenShader.frag#:~:text=Hyprland/example/screenShader.,com/hyprwm/Hyprland%20synced%20now
## Efekt wizualny (screen)
![[2026-03-26_051508.png|700]]

[^1]: Update (inne wagi etc): https://github.com/gustawL/dotfiles/commit/39629c4499616e6c4fd49bbefbd329b275291ef3
