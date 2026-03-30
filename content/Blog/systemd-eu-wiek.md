---
date: 2026-03-30
title: Weryfikacja wieku? to jakaś nowa moda?
id: "20260330171308"
tags:
  - systemd
  - linux
hideFolderListing: true
noindex: false
---
> [!info] Ostatnia aktualizacja _30.03.2026_
> Uwaga! Tu jest sporo subiektywizmu i nie wszystko dokładnie jeszcze przebadałem. Ale będę tu wracał, i korekty będą. Mogę się mylić - tak jak każdy. Sporo tu opinii i zjazdów z tematu. Apeluję o podejście krytyczne. Sam nie wiem co o tym myśleć. To najszczersze co mogę powiedzieć o tym tekście poniżej.

## SystemD i weryfikacja wieku
Aah... systemD! 

Czas pokazuje kto miał racje i jak zwykle... byłem jednym z tych którzy ją **mieli**. [^1]

Osobiście zawsze wolałem OpenRC (używam OD LAT na gentoo), Shepherd lub coś z rodziny systemów BSD. Przed gentoo przez grube 3 lata siedziałem na void linux ... piękna dystrybucja - polecam. [^5]

O przeszłości systemD chętnie się też wypowiem (i radzę wam przerzucić się na inny init system bo widać, że tu już wchodzą ostre mahlojki - a przynajmniej ktoś lub coś się do nich przymierza). Ostatnio popularnym tematem jest?

"wiek dla smartfonów" -> zabawne ... jakimś cudem temat przenikł do Open Source? tak jak skrajny lewicowy aktywizm? co tym razem wymyślą na usprawiedliwienie by coś przepchać? Jak będą się z tego tłumaczyć? Nie wiem... pożyjemy - pośmiejemy się jak pokorni niewolnicy. 

Chcę tylko na wstępie przypomnieć, że z reguły pewne regulacje nie służą przeciętnemu człowiekowi. A jeśli chodzi o używanie technologi czy interakcję z światem cyfrowym - to zawsze **zależy** od człowieka. Możecie sobie wprowadzać wymogi ale nigdy nie wyeliminujecie problemów a jedynie je **pogłębicie** [^9] - a czytelników zachęcam do krytycznego myślenia nawet wobec mnie.

Odnośnie historii i kontrowersji wokół systemD było w przeszłości wiele ... wiele znaków i słusznej krytyki. Community wokół open source które tak zacięcie broniło w sieci systemD teraz mogą w końcu spalić się z wstydu. Zamiast się "bronić" przed prawdą - po prostu zakumajcie w końcu, że to nie idzie w dobrą stronę i są projekty których **lepiej unikać** [^7]. Każdą krytykę, nawet konstruktywną w stronę systemD ludzie odbierali jak "gatekeeping" albo wrzeszczenie odklejonego nerda.

~~Przynajmniej mam potwierdzenie, że z moim osądem... jest wszystko w porządku i powiem więcej (mogę wyjść na aroganta) ale ja **rzadko** się mylę [^6] (a czas tylko to potwierdza).~~ Ja **lata temu** już porzuciłem systemD - i nie żałuję, ponieważ to kolejny "awesome dodge" w moim wykonaniu. Lepiej coś "wykopać" zza wczasu gdy jest sygnał ostrzegawczy. [^8]

Nawet jeśli obiektywnie i technicznie ten init system jest dobry - ja tak nie uważam.
I co? teraz pewnie niektórzy z was powiedzą "a no zdarza się, a to nie tak!!!  ooo teraz wyszli ci wstrętni hejterzy soystemuD !!!! o teraz to spać nam nie dadzą" - tylko, że w przypadku "nacisków z góry" to zawsze tak działało. Najpierw patrzą "na ile mogą sobie pozwolić" -> jak nikt nie reaguje (bierność jak na wojnie) -> mamy konsekwencje. A winni? **Będziecie wszyscy**. Kto zbiera baty? ludzie z tego projektu - kto nacisnął? rząd! [^11]

A część z tych którzy tak bronili systemD - pewnie teraz w panice uciekacie do Liberated systemd. Trzeba było to zrobić wcześniej i może nie bolałaby was niepotrzebna migracja :) i pamiętajcie Red hat = IBM. Możecie się oszukiwać. możecie robić opery mydlane na reddit ... ja wiem swoje. Aż mnie kusi by wrócić na moment reddita i poszukać tych wszystkich "rycerskich" wpisów. Prawda ma to do siebie, że przetrwa. 

Korzystajcie dalej z systemD. Ja nie używałem przez wiele lat, i nie zamierzam tego instalować kiedykolwiek. W innym świecie nie mam zamiaru żyć. A całej reszcie, życzę powodzenia. Ja i tak robię migrację do FreeBSD - i naprawdę chciałbym żeby to był ostatni "news" o soystemD. Nie chcę o tym pisać. Nie mówię, są naciski - są związane ręce. I myślę, że część z nas patrzy na nie właściwe ręce. [^10]

Jak bardzo nie przepadam za systemD - zdaję sobie sprawę, że trochę przesadzam. Też mnie to irytuje... ale to mógł być po prostu nacisk i może nie mieli za dużo do gadania? Szczerze? cokolwiek tu nie przeczytacie - to tylko emocje losowego typa (mnie). 
### systemd i Liberated systemd

Do czego to doszło :)

Jak podaje portal The Register [^2] w **marcu 2026 r.** do projektu "systemD" dodano pole **`birthDate`** (tu celowo ominę szczegóły, wspomniany portal opracował ten temat **lepiej** więc zachęcam do lektury). 

Implementacja ta to odpowiedź na kaskadę nowych regulacji prawnych w Stanach Zjednoczonych, Brazylii oraz Unii Europejskiej [^4], które dążą do przeniesienia odpowiedzialności za weryfikację wieku użytkownika z warstwy aplikacji bezpośrednio do warstwy systemu operacyjnego i sprzętu... co może pójść **nie tak**?

Ktoś o mentalności niewolniczej raczej tego nie załapie. Po prostu powiedzą ci, że tak trzeba. Bo "coś tam" - wstaw tu cokolwiek z korpobełkotu. Wiem, że wy też to wiecie. Riot Games też ma rootkita w swoim kliencie ... ale co tam? fajnie się gra w tą ligę legend prawda? :) tak to wciąga, że zgodzimy się ... **na wszystko**. 

... no comment. 

Twórca projektu Lennart Poettering podkreśla, że jest to slot na metadane, który dystrybucje i projekty, takie jak `xdg-desktop-portal`, **mogą** wykorzystać w celu przekazywania przedziału wiekowego, ale systemy, które tego nie chcą, mogą pole zignorować. 

Subiektywnie? najlepiej wywalić to w eter z codebase... ten 200 IQ move został podjęty przez Jeffreya Seathrún Sardinę który w odpowiedzi na kontrowersje stworzył fork **Liberated systemd**. Fork ten usuwa **_wszystkie_** elementy związane z z tymi kontrowersyjnymi dodatkami – od dokumentacji, przez kod źródłowy i testy, aż po opcje CLI. Według analizy Faun.dev obejmuje to **12 plików i 5 commitów**. **Chwała bohaterom!** Dokładnie tak się walczy o wolność.
### Co z Europą?
Unia Europejska dąży do wprowadzenia **EUDI Wallet**, który będzie służył do uwierzytelniania i weryfikacji wieku. Blueprint Komisji Europejskiej pozwala potwierdzić ukończenie 18 lat bez ujawniania innych danych. Regulacja (EU) 2024/1183 zobowiązuje bardzo duże platformy online do akceptacji tego portfela. W praktyce oznacza to, że age‑gating w UE ma być realizowany poprzez portfel cyfrowej tożsamości, a nie poprzez pola w plikach systemowych.. Nie rozumiem po co to jest... ale spoko. Marnotrawienie czasu i zasobów ludzkich. Good job! Good job! Polsko kochana obudź się!

Źródła do przejrzenia:
- https://ageverification.dev/Getting%20started/present_proof/
- https://www.bakermckenzie.com/en/insight/publications/2026/03/european-union-eudi-wallet-harmonizes-identification-and-age-gating#:~:text=In%20depth

Temu projektowi będę się przypatrywał ponieważ to może być **wczesny znak ostrzegawczy**. To pomału robi się coraz mniej zabawne. My mamy już mechanizm bezpiecznego logowania do np. banku i to jest hardware U2F ... tylko, że nie każdy bank wspiera klucze yubikey (i chyba jedyny bank który wspiera klucze bezpieczeństwa jest ING ... szkoda, że tu nie mają placówek... ja bym się przeniósł TERAZ bez namysłu).

Ja waszego "portfela" nie potrzebuję. Mam swój - dziękuję. Umiem też relatywnie dobrze zadbać o swoje cyfrowe bezpieczeństwo. Radzę się zastanowić - czy to ma jakiś sens. (I sam też będę się zastanawiał).
### Dlaczego niektóre ingerencje w open source mogą być szkodliwe?

Ponieważ może odebrać młodszym nabywanie kompetencji w technologii.
Wiece od czego zaczyna się prawdziwy faszyzm i tyrania? Od "reedukacji" młodzieży. Znacie takie słowa? „Ten, kto ma młodzież, ma przyszłość.” - nawet nie chcę pisać kto je wypowiedział. Jeszcze coś? kontrola edukacji i młodych pokoleń jest kluczowa dla utrzymania władzy. Zawsze biorą się za młodzież - najpierw. Wiecie te pokazy "drag queen" dla dzieci i w ogóle ...

nie wydaje wam się to wszystko chore? ale jak się **nie zgadzasz**!!!! o nie!!! to ty pan to jesteś {wstaw cokolwiek co kończy się na -izm -ista etc.}

Przecież wszyscy wiecie o jakie słowa chodzi :) Uciszanie ludzi ma się dobrze. 
A palce wskazują nie tam gdzie trzeba i przyklejane są etykiety które bardziej pasują do tych którzy je komuś przyklejają. 

Nie umiałbym programować gdyby nie Linux i Open source ... nie miałbym absolutnie **żadnej wiedzy** technicznej gdyby nie inni ludzie i otwarty kod. 

Wyobrażacie sobie nie móc studiować kodu? Nie mieć MOŻLIWOŚCI UCZENIA SIĘ systemów operacyjnych? uczyć się programowania na własną rękę? To jest wasza filozofia "równych szans"? NO TAK!!!! o to przecież własnie chodzi prawda? o gatekeeping. Do pracy na stanowisko informatyka ktoś mnie przyjął? nie! a jakieś doświadczenie mam - i nie miałbym go wcale gdyby nie Richard Stallman i Free Software Foundation, gdyby nie Linus Torvalds który stworzył kernel ponieważ procesor który posiadał nie był wspierany...  Gdyby nie projekty jak FreeBSD to ... jakie byłoby moje życie i innych?

Niszczycie innowację i ludzi. To jest zamach na wolną edukację. Co weźmiecie pod lupę następne? może weryfikacja wieku przy wchodzeniu do kibla? Może chcecie rozmiar czegoś innego? 

Aż tak ludziom zależy żeby "nie daj Boże" ktoś się czegoś nauczył? albo "ojeju bo sobie krzywdę zrobisz" xD Straszne. **Zawsze jest ryzyko**, kto go nie podejmuje ten nic nie ma. A tak przy okazji... był już taki prezydent USA który głośno i nieprzychylnie wypowiadał się o kryptografii. Człowiek racjonalny - wie, do czego to zmierza. Nawet AI mnie nie oszuka. I wiem, że AI takich rzeczy NIE ROZUMIE. 

Tak ChatGPT ... to zapewne k.... przypadek, że non stop gadają o weryfikacji wieku na każdym polu. Niby to takie inteligentne a nie widzi w tym głębszej korelacji... ciekawe nie? 

Ja was przepraszam za ten wpis. Sam nie wiem co myśleć i...
nie jestem wcale taki pewny co do swojego zdania. Z resztą... nie miałem jeszcze okazji wejść w szczegóły. Miłego wam (tak mimo wszystko i niezależnie w co wierzycie, jakie macie poglądy - wiem, że się nie przegadamy).  

[^1]: ~~Ja chyba serio zmienię branżę na wróżbitę.~~ No, nie sądzę. Obiekywnie to jeszcze: Nie sprawdziłem na mediach o co chodzi dokładnie ... nie sprawdzałem co na ten temat myślą inni (nie porównywałem zdania z innymi). Przeczytałem jedynie kilka artykułów - a jeszcze nie sprawdziłem dokładnie commitów, i nie jestem do końca pewien co z tymi regulacjami. 

[^2]: Źródło: https://www.theregister.com/2026/03/24/foss_age_verification/

[^4]: UE nie była wymieniona https://github.com/systemd/systemd/pull/40954 ale o tym ... kiedy indziej. Znaki ostrzegawcze już **są**. Tutaj telefoniki, wiek ... a za kurtyną wszystko inne. 

[^5]: Kiedyś ktoś zwrócił mi uwagę, że dobieram dystrybucje linuxa które mają package manager podobny do "ports" z FreeBSD :) może to moje destiny? :D xd

[^6]: Błąd. *Wiel*błąd. Oczywiście, że się mylę :) A jak często to przyznam się nie badałem i ... Chyba mnie poniosło :)

[^7]: A najlepiej to pisać własne. I w sumie ... o systemach init można sporo napisać :)

[^8]: Tak patrząc obiektywnie, to sporo moich decyzji pozwoliło mi uniknąć wiele globalnych "problemów" przez ... samo nieposiadania jakiegoś oprogramowania. Fajny do podjęcia temat to byłby "minimalizm" w podejściu do systemu ale . . . systemy operacyjne w dzisiejszych czasach takie trywialne nie są - i pojedyńcza osoba musi się naprawdę nagimnastykować żeby to wszystko zrobić i dobrze. Da się jednak minimalizować ryzyko przez ... zwyczajne nie używanie lub nawet zastąpienie (I tu jest potęga open source, że ... możesz **decydować** jaki element/program jest w twoim komputerze, systemie).

[^9]: Tego też nie jestem pewien. Ale jednak martwi mnie, że są próby **ingerowania** w środowisko open source. Bronię tego jak ostatniego bastionu być może ponieważ... tak patrząc realnie dla mnie nie ma zbyt wiele miejsc by się podziać. Jeszcze mogę uciec w książki i ebooki. Gry mi już zbrzydły, seriale są beznadziejne, filmy to samo ... Ja nie wiem, oni się ścigają kto pierwszy pójdzie na dno czy co?

[^10]: Akurat tu słusznie wątpię, i tak patrząc to wprowadzono **możliwość** - ale z czasem ktoś powie "no ale teraz to nie ma "**mogę**" ale "**musisz**".

[^11]: A przynajmniej - mimo, że za projektem systemD nie przepadam to jednak automatycznie przyjmuję stanowisko wstępne, że "to był nacisk".
