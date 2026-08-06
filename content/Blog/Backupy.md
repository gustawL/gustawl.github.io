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
> [!info] Ostatnia aktualizacja _05.08.2026_
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

Jestem przekonany, że albo szyfrujesz dobrze - albo ktoś to sprawdzi. Ktoś pomyśli, że "a to tylko malware skanowali" - a co jak skanują całą resztę? Mogę mieć ograniczone zaufanie ponieważ... to infrastruktura obca i nieznana. W życiu rzeczywistym nie idziesz do kolegi i nie prosisz go o coś w stylu "tu masz mój komputer z całą moją pracą ... czy możesz przechować"? Bezpieczeństwo komputerowe jest mocno oparte na kwestii "zaufania". Często też podejmuje się decyzje oraz kompromisy pomiędzy [[czym-jest-prywatnosc|prywatnością]] a bezpieczeństwem. Ktoś może się ze mną nie zgodzić ale tak jak algorytmy kryptograficzne muszą być jawne (Zasada Kerckhoffsa), tak kod programu którego używam powinien być również łatwo audytowalny. Wiedza nikogo nie dyskryminuje, i nie powinna.

Osobiście jestem sceptyczny wobec "passkeys" (nie miałem okazji ani czasu żeby wniknąć jak to działa).
Lepiej używać zewnętrznego klucza bezpieczeństwa np. yubikey (z którego nie da się wyciągnąć sekretu - ufam matematyce). "passkeys" nie działają tak samo. Jedyny niuans to mieć maszynę "air-gapped", i na niej robić takie operacje... bo na windowsie to jak z dziurawym parasolem ;)

Mając yubikey, jeśli zabezpieczasz np. ssh, to trzymanie klucza prywatnego po za kluczem sprzętowym jest słabe. 
Można klucz prywatny trzymać w pamięci yubikey, co umożliwia logowanie z dowolnej maszyny bez kopiowania plików klucza. Nasz key jest w relatywnie bezpiecznym miejscu, zamiast walać się po serwerach i jedynie zwiększać ryzyko.  

https://ilanjoselevich.com/blog/using-ssh-resident-keys-with-a-yubikey-5/
