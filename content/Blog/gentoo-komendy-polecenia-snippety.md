---
title: Gentoo - komendy, polecenia, snippety
tags:
  - linux
  - cmd
date: 2025-12-24
id: "20251224002355"
hideFolderListing: true
noindex: true
status: to review
---
> [!info] Ostatnia aktualizacja: _05.08.2026_
## Instalacja wybranej wersji pakietu
Załóżmy, że chcesz kernel w wersji 6.18.1:
``` sh
sudo emerge sys-kernel/gentoo-sources:6.18.1
```
## Jak znaleźć konkretną wersję programu?
``` sh
equery list -po sys-kernel/gentoo-sources
```

Można również zastosować eix
- https://wiki.gentoo.org/wiki/Eix#Searching_for_installed_packages
- https://wiki.gentoo.org/wiki/User:Pietinger/Tutorials/Selecting_a_convenient_kernel_version#List_of_available_kernel_version
## Listowanie usług
Wszystkie
```cmd
rc-status --all
```

---
## Ebuilds
### info i statystyki
```cmd
genlop -i foo
```

## Equery
Dostępne wersje pakietu/programu
```cmd
equery list -po foo
```

Alternatywnie
```cmd
equery y harfbuzz
```

---
## Patchowanie w gentoo

> [!warning] Stosowane przykłady
> x11-terms/st, oraz htop, ueberzug to tylko przykłady programów.
> Nie jest to uporządkowane workflow, jedynie snippet w razie gdybym sam zapomniał!
> Jeżeli czegoś nie rozumiesz, to tego nie rób.
> Jeżeli nie działa -> dziwne, u mnie działa. :)

Czasami pojawia się potrzeba by do programu nanieść swoje poprawki. Gentoo jest metadystrybucją - patchowanie jest dużo łatwiejsze niż na standardowej dystrybucji zapewniając większą kontrolę. Metoda nie jest najlepsza, ale na początek wystarczy każdemu. W uproszczeniu:

1. Tworzymy katalog dla programu który chcemy zmodyfikować.
	```cmd
	mkdir -p /etc/portage/patches/x11-terms/st/
	```
	Jako root!
2. Kopiujemy nasz .diff, .patch do katalogu który stworzyliśmy
3. Wchodzimy do katalogu
	```cmd
	cd /var/db/repos/gentoo/x11-terms/st
	```
4. Aplikujemy patch
	```cmd
	ebuild st-0.8.4-r1.ebuild clean prepare
	```
5. Rekompilujemy (jako root)
```cmd
emerge x11-terms/st
```

Reference: https://wiki.gentoo.org/wiki//etc/portage/patches

### Gdzie jest kod źródłowy programów?
```cmd
echo $(portageq distdir)
```

W moim przypadku i na standardowej instalacji gentoo jest to zwykle 
```path
/var/cache/distfiles
```

> [!warning] Ten katalog może być "czyszczony" w celu optymalizacji miejsca na dysku.
> Źródła:
> - https://www.reddit.com/r/Gentoo/comments/msqvwf/can_i_clean_distfiles/
> - https://wiki.gentoo.org/wiki//var/cache/distfiles

Reference: https://forums.gentoo.org/viewtopic-t-1101754-start-0.html

### Co skrywa tarball?
Jeżeli nie chcesz rozpakowywać tarballa i jedynie zobaczyć co skompresowane pliki zawierają (jako root)
```cmd
tar tvf ueberzug-18.1.9.tar.gz
```
### Patche
Jeżeli wiemy już gdzie są kody źródłowe do programów ... zanim wykonasz zmianę pamiętaj o tym by pracować na kopiach (informatycy śledczy pracując z np. dyskami również operują na kopiach by nie zniszczyć materiału dowodowego -> **rób backupy**, możesz przypadkiem coś nadpisać i żałować). Zrób kopię, i operuj na kopii. 

Po rozpakowaniu tarballa (i wejściu do katalogu z kodem)
```cmd
git init && git add .
```

Robisz swoje zmiany. 

Dla praktyki możesz wziąć program htop i zmienić głupi kolorek - nie niszczy to programu, ale są ludzie którzy nie mają pomysłu na czym ćwiczyć patchingu. Ja zanim wsiadłem na gentoo, nie kompilowałem ani nie patchowałem programów. Gdy przerzuciłem się na gentoo szukałem kontroli nad systemem, chciałem sam wybierać co mi się pulluje do systemu ku czci zasady, że nie powinno być zbędnego kodu. Co mi wtedy przeszkadzało? audio stack, chciałem jedynie alsa+jack2 (obecnie alsa+pipewire to standard ale wiele dobrych programów audio wciąż może obsługiwać głównie jack2) ... niestety większość dystrybucji pulluje też pulse-audio jako zależność (jestem audiofilem i nie lubię słabej jakości dźwięku). Siedziałem na binarnej dystrubucji, kompilacja czy patchowanie mnie wtedy nie interesowały dopóki nie zacząłem myśleć poważniej o programowaniu i zdobywaniu wiedzy. Ten switch na gentoo był dla mnie historyczny wręcz, potrzebowałem wiedzy i jak każdy szanujący się admin - kontroli. 

Gdy skończysz wprowadzać zmiany ...
```cmd
git diff | tee ../nameofyourpatch.diff
```

Kopiujemy patch/diff do znanego nam miejsca w portage (/etc/portage/patches/nazwa), następnie
```cmd
cd /var/db/repos/gentoo && sudo ebuild htop-3.2.2.ebuild clean prepare
```

### Źródła
- https://wiki.gentoo.org/wiki//etc/portage/patches
- https://wiki.gentoo.org/wiki/Creating_a_patch