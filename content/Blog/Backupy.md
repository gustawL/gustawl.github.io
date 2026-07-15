---
date: 2026-03-30
title: Backupy
id: "20260330004848"
tags:
  - cyberbezpieczeństwo
hideFolderListing: true
noindex: false
status: to review
---
> [!info] Ostatnia aktualizacja _15.07.2026_
## Dlaczego warto robić kopie zapasowe?

Pewna znajoma miała laptop (był wiekowy, z znamieniem czasu - ponad 10 lat).
Na tym laptopie dziewczyna miała wszystko - zdjęcia prywatne, jakieś inne ważne dokumenty etc.

Któregoś dnia, dysk w tym laptopie po prostu padł.
Niezależnie od dobrych chęci nie byłem w stanie nic z tym zrobić - BIOS nie czytał dysku w konsekwencji nawet znając techniki odzyskiwania danych ... miałem związane ręce - i był to przypadek "do specjalisty". 

Dyski HDD mają w sobie wiele mechanicznych i delikatnych części które łatwo uszkodzić. A jakby było tego mało, nie można ich otwierać w niesterylnych warunkach... Ale lekcja była. 

Inny przypadek z życia jako przykład?

Pamiętam jak pracowałem nad skryptem automatyzującym (nie pamiętam którym). Któregoś dnia przez własną głupotę i nieuwagę skasowałem ten skrypt. Straciłem **tydzień pracy** nad tym skryptem - myślicie, że chciało mi się go pisać drugi raz od nowa? Nie. 

Co prawda "trochę" byłem zły... ale kiedy emocje opadły postanowiłem, że zwyczajnie poszukam jakiegoś programu do odzyskiwania danych - i taki znalazłem. Był to TestDisk albo PhotoRec.

Tych odzyskanych plików było sporo, niestety nazwy tych plików się nie zachowały i na próżno było szukać po nazwie. 
Pamiętam, że użyłem "find" by znaleźć skrypt po rozszerzeniu. Akurat ta historia skończyła się dobrze choć czas który straciłem - nikt mi nie zwróci ... ale uratowałem tydzień mojej pracy. 

Kiedyś myślałem, że jeśli usuniesz plik w linuxie to możesz się z nimi pożegnać. Na moje szczęście - myliłem się :) 
Chwała informatykom śledczym i ich technikom. Nie wiem co bym zrobił gdybym miał zaszyfrowany dysk. . .

Ogólnie wniosek z tych dwóch historii jest prosty - **rób kopie zapasowe** chyba, że masz podejście podobne jak z kwestią prywatności... "nie mam nic do ukrycia", a do stracenia coś masz? Jeśli nie, to chyba nie widzisz wartości w swojej pracy. 
- Windows w wersji pro ma narzędzia do kopii zapasowych (home nie sprawdzałem).
- Na Apple Mac's mamy "Time machine" (Na Linux jest podobny "time shift").

---

Taki mały zjazd z tematu ... kto jak uważa, ale ja w chmurze wolę nie trzymać rzeczy na "goło" i uważam to za głupotę. Taki dowód wprost : https://www.ghacks.net/2023/05/16/microsofts-cloud-services-are-scanning-password-protected-zip-archives/ 

Jestem przekonany, że albo szyfrujesz dobrze - albo ktoś to sprawdzi. Ktoś pomyśli, że "a to tylko malware skanowali" - a co jak skanują całą resztę? Mogę mieć ograniczone zaufanie ponieważ... to infrastruktura obca i nieznana. W życiu rzeczywistym nie idziesz do kolegi i nie prosisz go o coś w stylu "tu masz mój komputer z całą moją pracą ... czy możesz przechować"? Bezpieczeństwo komputerowe jest mocno oparte na kwestii "zaufania". Często też podejmuje się decyzje oraz kompromisy pomiędzy [[czym-jest-prywatnosc|prywatnością]] a bezpieczeństwem. Ktoś może się ze mną nie zgodzić, ale tak jak algorytmy kryptograficzne muszą być jawne (Zasada Kerckhoffsa) ... tak kod programu którego używam powinien być również łatwo audytowalny. Wiedza nikogo nie dyskryminuje, i nie powinna.

Osobiście jestem sceptyczny wobec "passkeys" (nie miałem okazji ani czasu żeby wniknąć jak to działa).
Lepiej używać zewnętrznego klucza bezpieczeństwa np. yubikey (z którego nie da się wyciągnąć sekretu - ufam matematyce). "passkeys" nie działają tak samo. Jedyny niuans to mieć maszynę "air-gapped", i na niej robić takie operacje... bo na windowsie to jak z dziurawym parasolem ;)

Mając yubikey, jeśli zabezpieczasz np. ssh, to trzymanie klucza prywatnego po za kluczem sprzętowym jest słabe. 
Można klucz prywatny trzymać w pamięci yubikey, co umożliwia logowanie z dowolnej maszyny bez kopiowania plików klucza. Nasz key jest w relatywnie bezpiecznym miejscu, zamiast walać się po serwerach i jedynie zwiększać ryzyko.  

https://ilanjoselevich.com/blog/using-ssh-resident-keys-with-a-yubikey-5/

---

## Notatki
Szczerze? miałem zamiar wyciąć ten fragment i zrobić z tego osobną "notkę", ale nie widzę jeszcze sensu by nadawać temu status "projektu w trakcie" - nadal jestem na etapie majsterkowania i poprawiania błędów. 
### Serwer na lokalne backupy - jako projekt
Chcę magazyn na dane i mieć "poligon" szkoleniowy z serwerów, i sieci. 
Brnięcie w to ma zalety pragmatyczne:
1. Pokazuję umiejętności
2. Uczę się czegoś co jest pożyteczne dla mnie

Pomysł jest bardzo dobry, serwer ma być **lokalny** więc nie ma konieczności wystawiania go po za sieć lokalną... mieści się w normie bezpiecznego projektu do nauki. Serwer może mieć firewall bardzo restrykcyjny (deny incoming, deny outgoing) i jedynie zezwalać na połączenia z oficjalnymi repo. Szczerze? FreeBSD wydaje się świetnym wyborem na serwer ale waham się... jest dużo za.

Wracając myślą do "architektury informacji" - de facto, nie spodziewam się na studiach filologicznych twardo technicznych zagadnień po za aplikacjami webowymi. Ale istnieje przedmiot, na którym jest archiwizacja zbiorów cyfrowych. Trochę wstydem byłoby nie umieć archiwizować **własnych** danych i dokumentów ... jak śmiałbym później dbać o zbiory innych jeśli nawet nie umiem zadbać o swoje archiwa i zbiory?

Skompresowane i zaszyfrowane kopie mogę ewentualnie wrzucić do chmury jako "w razie wu" - tylko potrzebne, gdyby coś się stało z lokalnym serwerem i będzie potrzeba by taki serwer znowu postawić na nogi (wszystko może paść ... łącznie z ram).

Czego nie przemyślałem? sposób "migracji", oraz "co gdyby jutro mi padła maszyna?" to większe zmartwienie niż "x kopia zapasowa". 

Taki lokalny magazyn potrzebowałby dysków które są odporne na pożar (fajny cel do "skarbonki").

### Co powinienem znać i zaimplementować?
#### ZFS
ZFS dzięki sumom kontrolnym (checksumming) i mechanizmowi _Copy-on-Write_ (CoW) skutecznie "mityguje" zjawisko _bit rot_ (cichej degradacji danych). Legendy mówią, że niby sam ZFS "wystarcza" i niby "nie trzeba pamięci typu ECC" - why not both? :) Ufając doświadczeniu i wiedzy Linusa Torvaldsa - Pamięć RAM to bardzo niepewna część. Źródło z timestampem: https://youtu.be/mfv0V1SxbNA?si=YBdYjkt3l7kJ2KoX&t=488

FreeBSD jest "obywatelem pierwszej kategorii" (native support). W mojej skromnej opinii, wspomniany file system jest świetny do ochrony danych. Jeden z najlepszych fs jakie może mieć szanujący się admin (to subiektywne, na jakimś desktopie raczej nie kładłbym takiej kobyły). Tak myślę, czy dałoby radę zrobić taki "tunning" ZFS by był znośny na desktop? Czy może UFS będzie tu lepszy? 

Cała reszta:
- NFS (file sharing też może się odbywać przez ssh, pytanie ... czy naprawdę tego potrzebuję?)
- Jails, Capsicum (security). 

---

## Starsze notki
~~Jasne, jest jakiś google drive - ale co mi po 2 TB? 2 TB dzisiaj to nic jeżeli np. chcesz robić video, albo cokolwiek - musisz to gdzieś trzymać.~~ (Google na święta zwiększył do 5 TB dla subskrybentów. To oznacza, że najważniejsze można poddać kompresji i szyfrowaniu. Cloud można traktować jak "dodatkowe" zabezpieczenie na wypadek awarii.)
### Samba, NTFS
Wczoraj tj. 29.03.2026, na szybko postawiłem usługę "Samba". Nie jest to porządnie zrobione, i póki co mam to w osobnej sieci gdzie urządzenia mają "wywalone z bebechów (kernela)" wsparcie do wifi. W warunkach domowych i sieci lokalnej to mam nadzieję wystarczające na moment. Jak skończę robić porządki z danymi, powywalam pliki i katalogi których nie potrzebuję - następnym razem zrobię to inaczej z NTFS (lub cokowiek co FreeBSD oferuje do współdzielenia zasobów lokalnie). Nie wiem czy samba to dobry wybór. 
### Zmagania z devfs na FreeBSD i testy
Na FreeBSD miałem małą "gimnastykę" z uprawnieniami i grupami. 
Usługę samby stawiałem "na yolo" z podstawowymi zabezpieczeniami - ale po drodze były gorsze problemy niż samo postawienie usługi (to nawet małpa potrafi).

devfs muszę udokumentować ponieważ nie było to czysto rozegrane (miałem kilka podejść w tym kilka niepotrzebnych instalacji).
Ostatecznie ``lklfuse`` zadziałał świetnie.

Raczej nie zostawię serwera lokalnego w takim stanie gdzie mam pomieszane wszystko w konfiguracjach, nie jestem pewien w 100% czy jest to zrobione dobrze.

Po ogarnięciu rzeczy, po kilku próbach - zrobi się lepiej. 
### Coś na później?
- Skrypt który robi backup? chciałbym uprościć sobie życie i "pofragmentować" wszystko na obiekty. W sensie, w skrypcie chciałbym łatwy mechanizm dodawania plików do backupu ... byłby taki "formularzyk" w którym wpisywałbym właściwości czy atrybuty obiektu np. ścieżka, nazwa etc ... może wykorzystać sobie sqlite do tego? tak for fun nawet żeby wrócić do baz danych. Zastanawia mnie jedynie czy backup 'inkrementalny' będzie mi potrzebny? Czy dałoby się tak zrobić żeby to wszystko miało jakieś flow i sens ... snapshoty są super, ale samo poleganie na snapshotach też nie wydaje się rozsądne?
- Skrypt który automatyzuje mi kompresję, szyfrowanie i przesył na lokalny serwer [[zanim-wrzucisz-plik-cloud|ENG - zanim wrzucisz plik do cloud]]
- Własny VPN by móc relatywnie bezpiecznie łączyć się na odległość. Lub cokolwiek żeby mieć "konkretne" zasoby na wyciągnięcie ręki.

## Stan obecny
Muszę się wstrzymać, zrobienie kursów i zdobycie jakiejkolwiek normalnej pracy to piorytet. Chcę zmienić branżę - nikt nie chce juniorów w IT. Jeżeli nawet widzę ogłoszenie dla informatyka, to wymagania są po prostu albo zbyt duże lub wymagają prawa jazdy. Najlepiej jest to porzucić i zmienić branżę. Za duża konkurencja i nikt nie szuka informatyka o moim profilu umiejętności, większość to stanowiska dla ludzi którzy nic po za windowsem nie widzieli. 
