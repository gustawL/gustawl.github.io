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
> [!info] Ostatnia aktualizacja _01.04.2026_
## Dodatkowy kontekst
- Arkadikuss, Wprowadza szerszy kontekst do tematu. <br>_Wyróżniony materiał_: "[Chcą wprowadzić weryfikację wieku na systemy operacyjne. OCZYWIŚCIE DLA DOBRA DZIECI!](https://youtu.be/0ATx2XyuKV0?si=-EahwXs4qbmaPxjb)".
## Lektura do wejścia w temat
- Debian, lista mailingowa: <br>"[On the need for a censorship API for legal compliance reasons in some countries and U.S. states](https://lists.debian.org/debian-legal/2026/03/msg00018.html)"
- FreeBSD, lista mailingowa: [California law CA AB1043](https://lists.freebsd.org/archives/freebsd-hackers/2026-February/005867.html)
- Strona projektu "Ageless Linux": <br>[The Case Against Age Verification](https://agelesslinux.org/citations.html)
- Pull request #40954 (w skrócie PR):<br> [userdb: add birthDate field to JSON user records](https://github.com/systemd/systemd/pull/40954) [^15]
- Switched to Linux: <br>[The Linux Age Rebellion Has Begun](https://www.youtube.com/watch?v=97B2Hg27l_o)
- EFF: [Rep. Finke Was Right: Age-Gating Isn’t About Kids, It’s About Control](https://www.eff.org/deeplinks/2026/03/rep-finke-was-right-age-gating-isnt-about-kids-its-about-control)
- Reddit: 
	- [A new California law says all operating systems, including Linux, need to have some form of age verification at account setup](https://www.reddit.com/r/linux/comments/1rgl4hy/a_new_california_law_says_all_operating_systems/)
	- [Resist Age checks now!](https://www.reddit.com/r/linux/comments/1ri1eev/resist_age_checks_now/) 
- ExplainingComputers: <br>[Linux Age Verification: FOSS in the Brave New World](https://www.youtube.com/watch?v=ud7NEaHKP-k)
- Lunduke Journal o zajęciu stanowisk przez Slackware, *fed*ora: <br>[Slackware Says No to Age Verification, But Fedora Linux Says Yes](https://www.youtube.com/watch?v=M5Wd39RNzvg)
- The Linux Experiment:<br>[The Linux Age Verification situation is escalating & other Linux Weekly News](https://www.youtube.com/watch?v=IYtqghw3LVY)
- Brodie Robertson. (na jego kanale jest więcej materiałów na ten temat, ten podlinkowany jest bardziej interesujący ponieważ dotyka problemu developera który jest atakowany - wiecie, doxxing, blackmaile i inne brudne rzeczy): [I Spoke To The Dev Behind The Systemd Birth Date Change](https://www.youtube.com/watch?v=8bAN4Jam974)
## Inne znaleziska w temacie
Meta/Facebook zamieszany? (tutaj wstrzymałbym się z zajmowaniem stanowiska, nie jest to profesjonalny raport śledczy a agregacja ... postów z reddita? ) https://www.reddit.com/r/linux/comments/1rvywbu/reddit_user_uncovers_who_is_behind_metas_2b/
## SystemD i weryfikacja wieku
Aah... systemD! Osobiście zawsze preferowałem OpenRC, Shepherd lub coś z rodziny systemów BSD. 
Przed gentoo przez grube 3 lata siedziałem na void linux ... piękna dystrybucja - polecam. [^5] 
O przeszłości systemD chętnie kiedyś się wypowiem (i radzę wam przerzucić się na inny init system bo widać, że tu już wchodzą ostre mahlojki - a przynajmniej ktoś lub coś się do nich przymierza [^13]). Ostatnio popularnym tematem jest?

"Wiek dla smartfonów" -> zabawne ... jakimś cudem temat "wieku" przenikł do Open Source? 
Tak jak skrajny lewicowy aktywizm? Co tym razem?

Chcę tylko na wstępie przypomnieć, że z reguły pewne regulacje nie służą przeciętnemu człowiekowi. A jeśli chodzi o używanie technologi czy interakcję z światem cyfrowym - to zawsze **zależy** od człowieka. Możecie sobie wprowadzać wymogi ale nigdy nie wyeliminujecie problemów a jedynie je **pogłębicie** - a czytelników zachęcam do krytycznego myślenia nawet wobec mnie.

W przypadku "nacisków z góry" to zawsze tak działało. Najpierw patrzą "na ile mogą sobie pozwolić" -> jak nikt nie reaguje (bierność jak na wojnie) -> mamy konsekwencje. A winni? **Będziecie wszyscy**. Kto zbiera baty? ludzie z tego projektu - kto nacisnął? rząd! [^11]

Myślę, że część z nas patrzy na nie właściwe ręce. **[dylanmtaylor](https://github.com/dylanmtaylor)** otrzymuje od losowych ludzi "pogróżki", blackmaile (a nawet doxxing) ale to mógł być po prostu nacisk i może nie miał za dużo do gadania? I jeżeli nawet to nie byłby on tak hipotetycznie a ktoś inny ... to ktoś inny by oberwał (Jak słusznie zauważył Brodie Robertson). Ja tego nie popieram, i nawet nie mając dużego rozeznania w temacie - już na tym etapie pojawiło się w mojej głowie pytanie "a co jeśli musiał"? Ogarnijcie się.

Jak podaje portal The Register [^2] w **marcu 2026 r.** do projektu "systemD" dodano pole **`birthDate`** (tu celowo ominę szczegóły, wspomniany portal opracował ten temat **lepiej** więc zachęcam do lektury). 

Implementacja ta to odpowiedź na kaskadę nowych regulacji prawnych w Stanach Zjednoczonych, Brazylii, które dążą do przeniesienia odpowiedzialności za weryfikację wieku użytkownika z warstwy aplikacji bezpośrednio do warstwy systemu operacyjnego i sprzętu... co może pójść **nie tak**?

Ktoś o mentalności niewolniczej raczej tego nie załapie. Po prostu powiedzą ci, że tak trzeba. Bo "coś tam" - wstaw tu cokolwiek z korpobełkotu. Wiem, że wy też to wiecie. Riot Games też ma rootkita w swoim kliencie ... ale co tam? fajnie się gra w tą ligę legend prawda? :) tak to wciąga, że zgodzimy się ... **na wszystko**. 

... no comment. 

Twórca projektu Lennart Poettering podkreśla, że ``birthDate`` to jest slot na metadane, który dystrybucje i projekty, takie jak `xdg-desktop-portal`, **mogą** wykorzystać w celu przekazywania przedziału wiekowego, ale systemy, które tego nie chcą, **mogą** pole zignorować. Ludzie słusznie wskazują, że to tylko pole do wypełnienia którego **nie trzeba** wypełniać ... ale w przyszłości "może" *może* się zmienić na "**musicie**". I tu jest prawdziwy problem. Daj palec a uj... ci całą rękę. Dzisiaj to może być "niewinna zmiana", jutro coś grubego (niektórzy spekulują, że dzisiaj age verification, a następnie ID i wszystko jak leci - ta obawa wcale głupia nie jest).

### Liberated systemd
200 IQ move został podjęty przez Jeffreya Seathrún Sardinę który w odpowiedzi na kontrowersje stworzył fork **Liberated systemd**. Fork ten usuwa **_wszystkie_** elementy związane z z tymi kontrowersyjnymi dodatkami – od dokumentacji, przez kod źródłowy i testy, aż po opcje CLI. Według analizy Faun.dev obejmuje to **12 plików i 5 commitów**. **Chwała bohaterom!** Dokładnie tak się walczy o wolność.
### Co z Europą?
Unia Europejska dąży do wprowadzenia **EUDI Wallet**, który będzie służył do uwierzytelniania i weryfikacji wieku. Blueprint Komisji Europejskiej pozwala potwierdzić ukończenie 18 lat bez ujawniania innych danych. Regulacja (EU) 2024/1183 zobowiązuje bardzo duże platformy online do akceptacji tego portfela. W praktyce oznacza to, że age‑gating w UE ma być realizowany poprzez portfel cyfrowej tożsamości, a nie poprzez pola w plikach systemowych. Polsko kochana obudź się! Ogólnie brzmi to jak jakaś "alternatywa" choć ja się w to nie zagłębiałem -> mam mieszane odczucia po tym co się dzieje w UK czy USA. 

Źródła do przejrzenia:
- [Presenting a proof of age attestation](https://ageverification.dev/Getting%20started/present_proof/)
- [European Union: EUDI Wallet Harmonizes Identification and Age-Gating](https://www.bakermckenzie.com/en/insight/publications/2026/03/european-union-eudi-wallet-harmonizes-identification-and-age-gating#:~:text=In%20depth)

Temu projektowi będę się przypatrywał ponieważ to może być **wczesny znak ostrzegawczy**. To pomału robi się coraz mniej zabawne. Patrząc po tym co się dzieje w UK czy USA - lepiej zacząć pilnować żeby tutaj nie było jakiś "cudów inżynierii". 

[^2]: Źródło: https://www.theregister.com/2026/03/24/foss_age_verification/

[^5]: Kiedyś ktoś zwrócił mi uwagę, że dobieram dystrybucje linuxa które mają package manager podobny do "ports" z FreeBSD :) może to moje destiny? :D xd

[^11]: A przynajmniej - mimo, że za projektem systemD nie przepadam to jednak automatycznie przyjmuję stanowisko wstępne, że "to był nacisk".

[^12]: Tu się nie mylę, developer od projektu zbiera nieuzasadniony hejt - za decyzję na którą nie miał wielkiego wpływu. To po prostu musiało być. Jasne, mógł odmówić no ale ... co z tego? ktoś inny by to wprowadził w życie. 

[^13]: Są narracje, że zamieszany jest w to Facebook/Meta - Rozumiecie, pieniądze, wpływy i konkurencja. 

[^14]: Trochę przesadziłem ale i tak może być. 


