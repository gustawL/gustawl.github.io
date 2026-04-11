---
date: 2026-03-30
title: Weryfikacja wieku? to jakaś nowa moda?
id: "20260330171308"
tags:
  - systemd
  - linux
hideFolderListing: true
noindex: true
status: to review
---
> [!info] Ostatnia aktualizacja _11.04.2026_
## Ważne
Pokręciłem się trochę po forum gentoo i znalazłem interesującą rzecz: https://tboteproject.com/ <br>Projekt śledczy prowadzony przez niezależnych badaczy (pierwotnie zainicjowany przez użytkownika serwisu Reddit).<br>Naprowadził mnie "Zucca", https://forums.gentoo.org/viewtopic.php?p=8881856#p8881856
## Dodatkowy kontekst
- @GaryHTech "[Why Linux Users Are Being Locked Out of the Internet](https://www.youtube.com/watch?v=E6LxqUUaEo4&t=5s)"
- Arkadikuss, Wprowadza szerszy kontekst do tematu. Wspomniał o świetnym podejściu Japończyków do tematu. Również zauważa, że pewien zbiór wydarzeń (oraz podejście) może doprowadzić do pogłębienia problemu. <br>_Wyróżniony materiał_: "[Chcą wprowadzić weryfikację wieku na systemy operacyjne. OCZYWIŚCIE DLA DOBRA DZIECI!](https://youtu.be/0ATx2XyuKV0?si=-EahwXs4qbmaPxjb)".
- Kanał 300Kultura. <br>"[MASKI POWOLI OPADAJĄ. Klęska w starciu z faktami i danymi, czyli JAK NETFLIX KARMI LUDZI IDEOLOGIĄ](https://youtu.be/HHvfM1EfvTA?si=q8sOaVjMluankSa0)" <br>Materiał dotyczy przesłuchania dyrektora generalnego Netflixa, **Teda Sarandosa**, przed amerykańskim Senatem. Autor materiału skupia się na konfrontacji szefa platformy z senatorem **Joshem Hawleyem** oraz na danych dotyczących treści ideologicznych w produkcjach dla dzieci. Czyli ... nie zawsze "góra" chce źle. 
## Lektura do wejścia w temat
- Debian, lista mailingowa: <br>"[On the need for a censorship API for legal compliance reasons in some countries and U.S. states](https://lists.debian.org/debian-legal/2026/03/msg00018.html)"
- FreeBSD, lista mailingowa: [California law CA AB1043](https://lists.freebsd.org/archives/freebsd-hackers/2026-February/005867.html)
- Strona projektu "Ageless Linux": <br>[The Case Against Age Verification](https://agelesslinux.org/citations.html)
- Pull request #40954 (w skrócie PR):<br> [userdb: add birthDate field to JSON user records](https://github.com/systemd/systemd/pull/40954)
- Switched to Linux: <br>[The Linux Age Rebellion Has Begun](https://www.youtube.com/watch?v=97B2Hg27l_o)
- EFF: [Rep. Finke Was Right: Age-Gating Isn’t About Kids, It’s About Control](https://www.eff.org/deeplinks/2026/03/rep-finke-was-right-age-gating-isnt-about-kids-its-about-control)
- Reddit: 
	- [A new California law says all operating systems, including Linux, need to have some form of age verification at account setup](https://www.reddit.com/r/linux/comments/1rgl4hy/a_new_california_law_says_all_operating_systems/)
	- [Resist Age checks now!](https://www.reddit.com/r/linux/comments/1ri1eev/resist_age_checks_now/) 
- ExplainingComputers: <br>[Linux Age Verification: FOSS in the Brave New World](https://www.youtube.com/watch?v=ud7NEaHKP-k)
- Lunduke Journal o zajęciu stanowisk przez Slackware, *fed*ora: <br>[Slackware Says No to Age Verification, But Fedora Linux Says Yes](https://www.youtube.com/watch?v=M5Wd39RNzvg)
- The Linux Experiment:<br>[The Linux Age Verification situation is escalating & other Linux Weekly News](https://www.youtube.com/watch?v=IYtqghw3LVY)
- Brodie Robertson. (na jego kanale jest więcej materiałów na ten temat, ten podlinkowany jest bardziej interesujący ponieważ dotyka problemu developera który jest atakowany - wiecie, doxxing, blackmaile i inne brudne rzeczy): [I Spoke To The Dev Behind The Systemd Birth Date Change](https://www.youtube.com/watch?v=8bAN4Jam974)
## SystemD i weryfikacja wieku
Twórca projektu Lennart Poettering podkreśla, że ``birthDate`` to jest slot na metadane, który dystrybucje i projekty, takie jak `xdg-desktop-portal`, **mogą** wykorzystać w celu przekazywania przedziału wiekowego, ale systemy, które tego nie chcą, **mogą** pole zignorować. Ludzie słusznie wskazują, że to tylko pole do wypełnienia którego **nie trzeba** wypełniać ... ale w przyszłości "może" *może* się zmienić na "**musicie**".

Implementacja ta to odpowiedź na kaskadę nowych regulacji prawnych w Stanach Zjednoczonych, Brazylii, które dążą do przeniesienia odpowiedzialności za weryfikację wieku użytkownika z warstwy aplikacji bezpośrednio do warstwy systemu operacyjnego i sprzętu... co może pójść **nie tak**?

Bywa że z pewne regulacje nie służą przeciętnemu człowiekowi. A jeśli chodzi o używanie technologi czy interakcję z światem cyfrowym - to zawsze **zależy** od człowieka, i od tego jak korzysta. [^15] Możecie sobie wprowadzać wymogi ale nigdy nie wyeliminujecie problemów a jedynie je **pogłębicie** - a czytelników zachęcam do krytycznego myślenia nawet wobec mnie.

W przypadku "nacisków z góry" to zawsze tak działało. Najpierw patrzą "na ile mogą sobie pozwolić" -> jak nikt nie reaguje (bierność jak na wojnie) -> mamy konsekwencje. A winni? będziemy wszyscy. Kto zbiera baty? ludzie z tego projektu - kto nacisnął? rząd! Mimo, że za projektem systemD nie przepadam to jednak wg. mnie to był nacisk.

**[dylanmtaylor](https://github.com/dylanmtaylor)** od projektu zbiera nieuzasadniony hejt - za decyzję na którą nie miał wielkiego wpływu. Jasne, mógł odmówić no ale ... co z tego? ktoś inny by to wprowadził w życie. I jeżeli nawet to nie byłby on ... a hipotetycznie ktoś inny ... to ktoś inny by oberwał (Jak słusznie zauważył Brodie Robertson). Ja tego nie popieram, i nawet nie mając dużego rozeznania w temacie - już na tym etapie pojawiło się w mojej głowie pytanie "a co jeśli musiał"? Ogarnijcie się.
### Liberated systemd
Jeffrey Seathrún Sardina w odpowiedzi na kontrowersje stworzył fork **Liberated systemd** https://github.com/jeffrey-sardina/systemd. Fork ten usuwa **_wszystkie_** elementy związane z z tymi kontrowersyjnymi dodatkami – od dokumentacji, przez kod źródłowy i testy, aż po opcje CLI. Według analizy Faun.dev obejmuje to 12 plików i 5 commitów.
### Co z Europą?
Unia Europejska dąży do wprowadzenia **EUDI Wallet**, który będzie służył do uwierzytelniania i weryfikacji wieku. Blueprint Komisji Europejskiej pozwala potwierdzić ukończenie 18 lat bez ujawniania innych danych. Regulacja (EU) 2024/1183 zobowiązuje bardzo duże platformy online do akceptacji tego portfela. W praktyce oznacza to, że age‑gating w UE ma być realizowany poprzez portfel cyfrowej tożsamości, a nie poprzez pola w plikach systemowych. Polsko kochana obudź się! Ogólnie brzmi to jak jakaś "alternatywa" choć ja się w to nie zagłębiałem -> mam mieszane odczucia po tym co się dzieje w UK czy USA. 

Źródła do przejrzenia:
- [Presenting a proof of age attestation](https://ageverification.dev/Getting%20started/present_proof/)
- [European Union: EUDI Wallet Harmonizes Identification and Age-Gating](https://www.bakermckenzie.com/en/insight/publications/2026/03/european-union-eudi-wallet-harmonizes-identification-and-age-gating#:~:text=In%20depth)
