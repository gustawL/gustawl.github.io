---
date: 2026-03-30
title: Backupy
id: "20260330004848"
tags:
  - freebsd
  - zfs
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _30.03.2026_

## Dlaczego warto robić kopie zapasowe?

Pewna znajoma miała laptop (był wiekowy, z znamieniem czasu - ponad 10 lat).
Na tym laptopie dziewczyna miała wszystko - zdjęcia prywatne, jakieś inne ważne dokumenty ...
Któregoś dnia, dysk w tym latopie po prostu padł. [^1]
Niezależnie od dobrych chęci nie byłem w stanie nic z tym zrobić - BIOS nie czytał dysku w konsekwencji nawet znając techniki odzyskiwania danych ... miałem związane ręce - i był to przypadek "do specjalisty". 

Dyski HDD mają w sobie wiele mechanicznych i delikatnych części które łatwo uszkodzić. A jakby było tego mało, nie można ich otwierać w niesterylnych warunkach... Ale lekcja była. 

Inny przypadek z życia jako przykład?

Pamiętam jak pracowałem nad skryptem automatyzującym (nie pamiętam którym - może to był prosty skrypt do backupów który kompresował i szyfrował, nieważne ... ). Któregoś dnia przez własną głupotę i nieuwagę skasowałem ten skrypt.
Straciłem **tydzień pracy** nad tym skryptem - myślicie, że chciało mi się go pisać drugi raz od nowa? Nie. 

Co prawda "trochę" byłem zły... ale kiedy emocje opadły postanowiłem, że zwyczajnie poszukam jakiegoś programu do odzyskiwania danych - i taki znalazłem. Był to TestDisk albo PhotoRec.

Niestety odzyskane pliki (a była ich cała masa) nie miały **nazwy pliku** tylko jakieś losowe ciągi znaków. 
Pamiętam, że użyłem "find" by znaleźć skrypt po rozszerzeniu. Akurat ta historia skończyła się dobrze choć czas który straciłem - nikt mi nie zwróci ... ale uratowałem tydzień mojej pracy. 

Kiedyś myślałem, że jeśli usuniesz coś na Linux - to możesz się z plikami pożegnać. Na moje szczęście - myliłem się :) 
Chwała informatykom śledczym i ich technikom. Nie wiem co bym zrobił gdybym miał zaszyfrowany dysk. . .

Ogólnie wniosek z tych dwóch historii jest prosty - **rób kopie zapasowe** chyba, że masz podejście podobne jak z kwestią prywatności... "nie mam nic do ukrycia", a do stracenia coś masz? Jeśli nie, to chyba nie widzisz wartości w swojej pracy. 
- Windows w wersji pro ma narzędzia do kopii zapasowych (home nie sprawdzałem).
- Na Apple Mac's mamy timeshift (timeshift też wersję pod linuxy)
- Jeśli chodzi o systemy alternatywne - tutaj człowiek jest zdany na swój osąd

---

## Notatki
### Serwer na lokalne backupy - jako projekt
Ogólnie po za urządzeniami biurowymi, pojawiła się we mnie potrzeba posiadania "magazynu" na dane.

Jasne, jest jakiś google drive - ale co mi po 2 TB? 2 TB dzisiaj to nic jeżeli np. chcesz robić video, albo cokolwiek - musisz to gdzieś trzymać. Co jeśli będzie potrzeba żeby do jakiegoś projektu wrócić? co jeśli coś mi się stanie z komputerem i stracę coś nad czym x czasu pracowałem? Trzeba mieć podstawę. 

Przeciętnemu człowiekowi "taniej" to kupić nie duży NAS zamiast serwera (raczej przeciętny John Doe nie zrobi tego dobrze - biorąc pod uwagę, że to jeszcze musi być pozabezpieczane etc.). 

### Stack (wybory)

#### Plan projektu
Serwer lokalny na dane, backupy:
- ZFS
- datasety pod różne typy danych
- `compression=lz4`
- `atime=off`

NFS:
- NFSv4 (albo v3)
- spójne UID/GID
- `sync=standard`

Klient:
- mount NFS -> brak kombinowania
#### ZFS
FreeBSD ma "natywne wsparcie" dla ZFS - prawdopodobnie najlepszego systemu plików.
W mojej skromnej opinii, wspomniany file system jest świetny do ochrony danych.

> [!note] 30.03.2026 04:55
> Ogólnie to nawet nie będzie potrzeby by zgłębiać samby.
> NFS będzie dobry - tak wszystko planuję przerzucić na FreeBSD i porzucić gierki komputerowe. Ja mam swoje gry w technologii. 

##### Samba, NTFS
Wczoraj tj. 29.03, na szybko postawiłem usługę "Samba". Nie jest to porządnie zrobione, i póki co mam to w osobnej sieci gdzie urządzenia mają "wywalone z bebechów (kernela)" wsparcie do wifi. W warunkach domowych i sieci lokalnej to mam nadzieję wystarczające na moment. Jak skoczę robić porządki z danymi, powywalam pliki i katalogi których nie potrzebuję - następnym razem zrobię to inaczej z NTFS (lub cokowiek co FreeBSD oferuje do współdzielenia zasobów lokalnie). Nie wiem czy samba to dobry wybór. 
##### Zmagania z devfs na FreeBSD i testy
Na FreeBSD miałem małą "gimnastykę" z uprawnieniami i grupami. 
Usługę samby stawiałem "na yolo" z podstawowymi zabezpieczeniami - ale po drodze były gorsze problemy niż samo postawienie usługi (to nawet małpa potrafi).

devfs muszę udokumentować ponieważ nie było to czysto rozegrane (miałem kilka podejść w tym kilka niepotrzebnych instalacji).
Ostatecznie ``lklfuse`` zadziałał świetnie i wokół tego programu będę to robił "na czysto". Raczej nie zostawię serwera lokalnego w takim stanie gdzie mam pomieszane wszystko w konfiguracjach, nie jestem pewien w 100% czy jest to zrobione dobrze.

Po ogarnięciu rzeczy, po kilku próbach - zrobi się lepiej. 
#### Co po serwerze lokalnym?
- Skrypt który automatyzuje mi kompresję, szyfrowanie i przesył na lokalny serwer [[zanim-wrzucisz-plik-cloud|ENG - zanim wrzucisz plik do cloud]]
- Własny VPN by móc relatywnie bezpiecznie łączyć się na odległość. Lub cokolwiek żeby mieć "konkretne" zasoby na wyciągnięcie ręki. 

[^1]: Ufając doświadczeniu i wiedzy L. Torvaldsa - najbardziej nieprzewidywalna pod tym kątem jest pamięć RAM. Źródło z timestampem: https://youtu.be/mfv0V1SxbNA?si=YBdYjkt3l7kJ2KoX&t=488 Mądrych ludzi zawsze warto posłuchać. 
