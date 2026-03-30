---
date: 2026-03-30
title: Backupy
id: "20260330004848"
tags:
  - freebsd
  - zfs
  - bezpieczeństwo
hideFolderListing: true
noindex: false
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
- Na Apple Mac's mamy "Time machine" (Na Linux jest podobny "time shift") ... 

Jeśli chodzi o pozostałe i inne opcje ... kto jak uważa, ale ja w chmurze wolę nie trzymać rzeczy na "goło" i uważam to za głupotę. Taki dowód wprost : https://www.ghacks.net/2023/05/16/microsofts-cloud-services-are-scanning-password-protected-zip-archives/ 

Generalnie, albo szyfrujesz dobrze - albo ktoś to sprawdzi. Ktoś pomyśli, że "a to tylko malware skanowali" - a co jak skanują całą resztę? No ja frajerem nie jestem. 

Btw. "passkeys" to kolejny debilizm [^3], i lepiej używać **ZEWNĘTRZNEGO** klucza bezpieczeństwa np. yubikey z którego nie da się wyciągnąć sekretu. "passkeys" nie działają tak samo. To jest ogromna różnica. Z perspektywy opsec (Operations Security), fizyczny klucz (np. yubikey) działający jako Hardware-bound Credential jest bezpieczniejszy, ponieważ sekret nigdy nie opuszcza układu scalonego (warto mieć dwa klucze skonfigurowane 1:1 tak samo). Jedyny niuans to mieć maszynę "air-gapped", i na niej robić takie operacje... bo na windowsie to jak z dziurawym parasolem ;)

Mając yubikey, jeśli zabezpieczasz np. ssh, to trzymanie klucza prywatnego po za kluczem hardwarowym jest słabe. 
Można priv key trzymać w pamięci yubiKey, co umożliwia logowanie z dowolnej maszyny bez kopiowania plików klucza. Nasz key jest w relatywnie "bezpiecznym" miejscu, zamiast walać się po serwerach i jedynie zwiększać ryzyko.  

https://ilanjoselevich.com/blog/using-ssh-resident-keys-with-a-yubikey-5/

---

## Notatki
### Serwer na lokalne backupy - jako projekt
Ogólnie po za urządzeniami biurowymi, pojawiła się we mnie potrzeba posiadania "magazynu" na dane.

Jasne, jest jakiś google drive - ale co mi po 2 TB? 2 TB dzisiaj to nic jeżeli np. chcesz robić video, albo cokolwiek - musisz to gdzieś trzymać. Co jeśli będzie potrzeba żeby do jakiegoś projektu wrócić? co jeśli coś mi się stanie z komputerem i stracę coś nad czym x czasu pracowałem? Trzeba mieć podstawę. 

Przeciętnemu człowiekowi "taniej" to kupić nie duży NAS zamiast serwera (raczej przeciętny John Doe nie zrobi tego dobrze - biorąc pod uwagę, że to jeszcze musi być pozabezpieczane etc.). 

Generalnie pomysł i strategia jest prosta.
1. lokalny serwer na backup i dane (i TYLKO to)
2. skompresowane i zaszyfrowane kopie mogę ewentualnie wrzucić do chmury jako "w razie wu" - tylko potrzebne, gdyby coś się stało z lokalnym serwerem i będzie potrzeba by taki serwer znowu postawić na nogi (wszystko może paść ... łącznie z ram)
3. o punkcie trzecim nawet nie myślałem. Generalnie ... znalezienie sposobu "migracji", ew. "co gdyby jutro mi padła maszyna" byłoby lepszym sposobem na spędzenie czasu niż martwienie się o miejsce na 3 kopię... kopii. 
#### Po co i dlaczego?
Brnięcie w to ma dwie zalety i obie są bardzo pragmatyczne:
1. Pokazuję umiejętności
2. Uczę się czegoś co jest pożyteczne dla mnie

Wracając myślą do "architektury informacji" - de facto, nie spodziewam się na studiach filologicznych twardo technicznych zagadnień po za aplikacjami www. Ale istnieje przedmiot, na którym jest archiwizacja zbiorów cyfrowych. Trochę wstydem byłoby nie umieć archiwizować **własnych** danych i dokumentów ... jak śmiałbym później dbać o zbiory innych jeśli nawet nie umiem zadbać o swoje archiwa i zbiory?
### Stack (wybory)

#### Plan projektu
Serwer lokalny na dane, backupy:
1. ZFS:
  - datasety pod różne typy danych
  - `compression=lz4`
  - `atime=off`
  
2. NFS:
  - NFSv4 (albo v3)
  - spójne UID/GID
  - `sync=standard`
  - mount NFS -> brak kombinowania jeśli mam wszystko na FreeBSD
#### ZFS

ZFS dzięki sumom kontrolnym (checksumming) i mechanizmowi _Copy-on-Write_ (CoW) skutecznie mityguje zjawisko _bit rot_ (cichej degradacji danych). Legendy mówią, że niby sam ZFS "wystarcza" i niby "nie trzeba pamięci typu ECC" - why not both? :)

FreeBSD jest "obywatelem pierwszej kategorii" (native support). W mojej skromnej opinii, wspomniany file system jest świetny do ochrony danych. Jeden z najlepszych fs jakie może mieć szanujący się admin. 

> [!note] 30.03.2026 04:55
> Ogólnie to nawet nie będzie potrzeby by zgłębiać samby.
> NFS będzie dobry - i tak wszystko planuję przerzucić na FreeBSD i porzucić gierki komputerowe. Ja mam swoje gry w technologii. 

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

[^2]: Ciekawostka: Czy wiesz, że piosenka ""

[^3]: _Passkeys_ (w domyślnej implementacji Apple/Google) to tzw. _Syncable FIDO Credentials_ – klucze prywatne są synchronizowane w chmurze producenta.
