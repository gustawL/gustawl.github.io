---
date: 2026-10-17
title: EAC v2? Nie, dziękuję!
id: "20261017185803"
tags:
  - gaming
  - linux
  - cyberbezpieczeństwo
  - ai-assisted
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _17.10.2026_

## Epic Games wyskakuje z EAC 2.0
Doszły mnie słuchy, że Epic Games ostatnio tj. 14 października wyskoczył z nowym EAC v2 [^1]. Przytoczyłbym pewne powiedzenie ostrzej ale może delikatniej "Przylepiło się coś do okrętu i krzyczy - płyńmy!". To najprawdopodobniej na fali popularności SteamOS który miałem przyjemność przez ostatnie dni testować. Chętnie napisałbym o tym więcej innym razem, a tymczasem ...

Charakterystycznym dla GNU/Linux jest fakt, że masz wolność oraz swobodę w porównaniu do systemów typu Windows. 

Z oficjalnej strony Epic Games:
"... getting your distribution aligned with **our configuration requirements** to get your signing keys added to our well-known list." ... czytam dalej... "players will be prompted to install an anti-cheat **systemd service** which runs only while a protected game is running".

Mam z tym problem ponieważ **nie używam** systemD i nie zamierzam. **To nie jest windows**, nie jestem zainteresowany waszymi ~~grami~~ "usługami". Numer telefonu, weryfikacja dwuskładnikowa ... czego wy jeszcze chcecie?

Pamiętacie tą głośną sprawę z weryfikacją wieku i systemd? [^2] Chyba wiem do czego to zmierza.

A ten EAC v2 wam też zamontują na serwerach żebym ja miał pewność, że uruchamiacie swoje serwery gier na realnym krzemie a nie na maszynie wirtualnej? Mój zakupiony sprzęt to nie jest wasza sprawa, waszym sprzętem ktoś się będzie interesował? Macie potwierdzenia, że ktoś tam przychodzi i audytuje wasze "środowisko"?

Ironicznym jest, że to właśnie maszyna wirtualna zapewnia świetną izolację od malware. Wasze wymogi z kolei nie spełniają standardów mojego bezpieczeństwa więc - ja państwu podziękuję ^^

Ta relacja jest całkowicie asymetryczna. Korporacje wymagają od gracza pełnej transparentności, dostępu do uprawnień administracyjnych (root/system), weryfikacji sprzętowej i danych osobowych. W zamian gracz otrzymuje czarną skrzynkę (closed-source), co do której musi mieć "zaufanie" w ciemno, że nie robi niczego złego. Serwery gier w ogromnej większości działają właśnie na maszynach wirtualnych/kontenerach w chmurach AWS, Azure - tam wirtualizacja jest w porządku, ale na komputerze klienta nagle staje się "zagrożeniem"? Może ten EAC powinien działać W DWIE STRONY?! Może jak wasza gierka trafia na sklep to powinna mieć code review przez sito 30 analityków kodu i służby? Malware w grach też się pojawia i to w legitnych sklepach! [^3] A co jak wasz developer padnie ofiarą ataku oraz socjotechniki? niech zgadnę... powiecie "przepraszam"? 

W nomenklaturze organizacji Trusted Computing Group słowo "Zaufany" (Trusted) nie oznacza "bezpieczny dla użytkownika" [^4].
### Measured Boot 
Po uruchomieniu systemu (lub w trakcie gry) oprogramowanie (np. anty-cheat) może "odpytać" moduł TPM: "Pokaż mi logi z rozruchu podpisane Twoim kluczem kryptograficznym". Anty-cheat analizuje te dane i jeśli suma kontrolna jądra systemu się nie zgadza (bo np. uruchomiłeś zmodyfikowane jądro Linuksa lub hypervisor maszyny wirtualnej), to gra się nie uruchomi ponieważ środowisko jest "niezaufane".
Skoro nie ufacie klientom, to dlaczego ja mam wam ufać? Nie ma lepszego sposobu?

Na szczęście mam na tyle wolności, że nie muszę grać w ich gry. 
Wolę bezpieczeństwo własne niż kolorowy badziew. W leauge of legends też od lat nie gram i żyję... zgadnijcie dlaczego. 

Dzisiaj chcą ostrożnie, po dobroci i jak się ludzie przyzwyczają to i anticheat się zmieni - tak to się skończy. Nawet nie zauważycie kiedy. W imię bezpieczeństwa - ale nie waszego.
## Sceptycyzm społeczności
Nie jestem osamotniony w tym. Ludzie zadają pytania czy te wszystkie wymagania są tego warte (spoiler, nie są). Co ciekawe ... niektóre posty które miałem załączyć oczywiście zdjęła moderacja na reddit ^^
 - Jowi Morales, *Epic introduces an improved version of anti-cheat for Linux — strict TPM 2.0 and Secure Boot rules spark open-source pushback*, https://www.tomshardware.com/video-games/pc-gaming/epic-introduces-an-improved-version-of-anti-cheat-for-linux-eac-linux-v2-will-finally-allow-linux-gamers-to-play-fortnite
 - Matthew Garrett, *Epic's EAC2 v2 seems fairly easily bypassable*, https://codon.org.uk/~mjg59/blog/p/epics-eac2-v2-seems-fairly-easily-bypassable/
 - Leniwcowaty, reddit - r/Polska, https://www.reddit.com/r/Polska/comments/1tlo8zw/wasze_podej%C5%9Bcie_do_kernellevel_anticheat_w_grach/
 - the_abortionat0r, reddit - r/linux_gaming, *EAC2 is NOT how an anticheat on Linux should be done.*, https://www.reddit.com/r/linux_gaming/comments/1x64b84/eac2_is_not_how_an_anticheat_on_linux_should_be/ 
 - TheNavyCrow, reddit - r/linux, https://www.reddit.com/r/linux/comments/1x5uo7s/fortnite_is_coming_to_linux/

[^1]: Epic Games, Awesome Gaming on Linux Without Cheating, https://onlineservices.epicgames.com/news/introducing-easy-anti-cheat-linux-v2

[^2]: Joe Brockmeier, LWN, "Objections to systemd age-attestation changes go overboard", https://lwn.net/Articles/1064706/.

[^3]: Pieter Arntz, *Steam games abused to deliver malware once again*, https://www.malwarebytes.com/blog/news/2025/07/steam-games-abused-to-deliver-malware-once-again

[^4]: Ross Anderson, "Trusted Computing" FAQ, https://www.cl.cam.ac.uk/archive/rja14/tcpa-faq.html
