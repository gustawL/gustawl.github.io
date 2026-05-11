---
date: 2026-05-11
title: GOG galaxy vs windows 11
id: "20260511200306"
tags:
  - windows
  - antywirus
  - gaming
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja: _11.05.2026_
## GOG Galaxy - problem z odpaleniem instalatora

![[202605111949.jpg|350]]

Ponieważ w chwili obecnej jestem pochłonięty książką "Twierdza linux", oraz praktyką ... Na linuxie nie mam póki co jak odpalać gierek - musiałem tymczasowo przerzucić pierdoły na windowsa. 

W weekend znajomy zaprosił mnie na sesję Age of Wonders 4. I tak chciałem zobaczyć Thrones of Blood, więc się zgodziłem. 

Pobrałem instalator GOG Galaxy z oficjalnej strony GOG, ale windows się zbuntował (działa poprawnie, to była reakcja antywirusa jak się okazało). 

Znalazłem nie tylko rozwiązanie, ale też najrozsądniejszy sposób by zainstalować GOG Galaxy mimo tego "błędu" (Ciężko nazwać błędem coś co funkcjonuje zgodnie z przeznaczeniem. Ten błąd to znak, że poświęciłeś czas by włączyć odpowiednie kontrolki w antywirusie). To czy to instalator potrzebuje modernizacji czy może windows wybiórczo dopuszcza ... kwestia sporna. W Ms store nie miałem problemu zainstalować spotify ale GOG galaxy już tak :D To samo z steamem. Nie przypominam sobie bym musiał grzebać w antywirusie w którym prawie wszystko co możliwe mam włączone. Ciekawe ;)

### Skąd wiem co wyłączyć?
- https://www.gog.com/forum/general_beta_gog_galaxy_2.0/0xc0000005_error

### Rozwiązanie 

Nas interesuje by dla jednej binarki (instalator gog galaxy z oficjalnej strony) zrobić wyjątek. Wiemy, że problem powoduje tylko jedna kontrolka bezpieczeństwa... i tylko tą jedną kontrolkę w tym wyjątku wyłączymy. Nie wyłączamy globalnych zabezpieczeń tylko dlatego ponieważ "coś nie działa". Działa! Ale te komunikaty o błędach takie są, że przeciętnemu użytkownikowi nic to nie mówi.

Wchodzimy w windows security -> App & browser control -> Exploit protection -> Program Settings.

![[20260511202309.jpg|500]]

W program settings dodajemy binarkę (Add program to customize), wybieramy `GOG_Galaxy_2.0.exe`. Dla "Force randomization for images (Mandatory ASLR)" robimy "override" ustawień z "System settings" wyłączając TYLKO TĄ kontrolkę dla tej aplikacji. 

![[20260511204252.jpg|500]]
Po zatwierdzeniu "apply", instalator powinien już się "odpalić".