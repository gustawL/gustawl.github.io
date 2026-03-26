---
date: 2026-03-25
title: Prosty Shader ekranowy w Hyprland
id: "20260325235529"
tags:
  - hyprland
  - glsl
  - grafika-komputerowa
hideFolderListing: true
noindex: false
---
Link do fragmentu kodu: https://github.com/gustawL/dotfiles/commit/9bc84b63cb57b67e1f008f0d7a00de4ce03fcb3f

Hyprland udostępnia zmienną konfiguracyjną `decoration:screen_shader`, która jako wartość przyjmuje ścieżkę do własnego shadera nakładanego na końcu renderowania pulpitu.  
Oznacza to, że plik z shaderem (np. `grayscale.glsl`) jest shaderem GLSL używanym jako końcowy efekt post-processingu obrazu.
## Skąd pomysł?
Legendy mówią, że wszytko na ekranie w "grayscale" coś daje. Nie mam stanowiska, ale pojawił się chociaż pomysł na zrobienie czegoś (w tym wypadku chciałem czegoś co w prosty sposób zaaplikuje taki "filtr" na ekranie). 

Jaskrawe kolory, wysoki kontrast i animacje w aplikacjach są projektowane tak, aby zwiększać zauważalność bodźców i angażować uwagę... Ja nie zabiegam o uwagę. 

Usunięcie jaskrawych barw może subiektywnie zmniejszyć obciążenie wzrokowe, ale sama skala szarości nie usuwa niebieskiego światła (tu lepiej działa `wlsunset`). Suchość i zmęczenie oczu częściej zależą od jasności ekranu, kontrastu, czasu patrzenia i rzadkiego mrugania.

podobno tryb monochromatyczny może pośrednio pomagać w utrzymaniu normalnego rytmu dobowego i lepszego snu, szczególnie jeśli jest stosowany wieczorem i sprawia, że ekran mniej angażuje. Sam w sobie nie działa jednak tak jak obniżenie jasności i ocieplenie temperatury barwowej.

Nie wiem, czy skala szarości ma jakieś mega korzyści... ale „potrzeba matką wynalazku”.

## Efekt wizualny (screen)
![[2026-03-26_020058.png|697]]

Przepraszam za waybar... eksperymentowałem z konfiguracją, a potrzebowałem screena. Wiem, że elementy na górze nie są w jednej linii z okienkami ;)
