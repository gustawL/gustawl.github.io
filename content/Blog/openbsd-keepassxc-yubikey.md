---
date: 2026-10-18
title: OpenBSD i Challenge-response
id: "20261018015354"
tags:
  - openbsd
  - yubikey
  - cyberbezpieczeństwo
  - keepassxc
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _18.10.2026_

## Challenge-Response działa na OpenBSD!

> [!info] TL;DR
> Przyczyna? **daemon pcscd**!  -> **wyłączcie go**. 

Po ostatniej fali wycieków danych w Polsce oraz antykonsumenckich praktyk niektórych korporacji ... przypomniałem sobie, że o własne bezpieczeńtwo muszę zadbać sam.

Odkurzyłem więc najlepiej nadający się system operacyjny do użytku (OpenBSD ma domyślnie sanboxowaną przeglądarkę - bubblewrap na linux jest upierdliwy podobnie jak iptables).

Niestety ostatnio (może rok, lub dwa lata temu) kiedy chciałem stworzyć bazę haseł w keepassxc i zabezpieczyć ją kluczem yubikey ... pojawiał mi błąd w konsoli.

Nie tak dawno premierę miał nowy release 7.9 https://www.openbsd.org/79.html
Z tej okazji postanowiłem spróbować jeszcze raz... tym razem z pomocą sztucznej inteligencji (zaczynają mi się podobać te AI!). 

Odpaliłem pełen update z 7.8 do 7.9, w tym zaktualizowałem programy.
Uruchomiłem keepassxc (ten build z yubikey), przeklikałem się do "add additional protection" ... no i kurczę w konsoli zobaczyłem

> Hardware key USB error: other/unknown error

Wytłumaczyłem niebiałkowej sztucznej inteligencji, że system przecież widzi yubikey i pcscd też (`pcsc_scan`). Po jej odpowiedzi dodałem, że libusb jest... keepassxc-yubikey? jest... pcsc-lite? no jest...

AI wspomniało, że keepassxc realizuje challenge-response przez bibliotekę `ykcore` oraz interface USB. Model zaproponował by wykonać test ...

``` 
ykchalresp -1 test
```

output:
> USB error: Other/unknown error

Na bazie powyższego outputu model zaproponował następnie by wyłączyć daemona pcscd:
``` ksh
rcctl stop pcscd
```

Kiedy zobaczyłem losowy ciąg znaków (output który powinien być) zdębiałem - działa.
Jak model to wyjaśnił? pcscd podobno kolidował z dostępem do yubikey przez usb, którego potrzebuje keepassxc jak i ykchalresp. 

Dla ciekawostki... to był model OpenAI (ten darmowy), aż jestem w szoku ... Gemini jak odpytywałem parę dni temu to nie wiedział a męczyłem temat z nim naprawdę długo.
OpenAI szybko zidentyfikowało problem - to było jakieś 10 minut.

Wiedziałem, że to musi działać ponieważ to wynika z opisu portu na openports.pl
> "Main Features: ... - Key file and YubiKey challenge-response support for additional security"
- https://openports.pl/path/security/keepassxc

Chyba czas skonfigurować klucze i ogarnąć życie cyfrowe.

Zakładam, że baza z hasłami powinna znajdować się w bezpiecznym miejscu i nie powinna znajdować się na systemie w którym przeglądarka nie jest odpowiednio zabezpieczona (przeglądarka jest jednym z najsłabszych ogniw bezpieczeństwa, nawet na smartfonie).

A jeszcze lepiej jakby ta baza nie miała w ogóle styku z internetem ale nie wiem czy to nie przesada by wpisywać długie ciągi znaków ręcznie. 

Następnym razem wrzucę jak taki klucz skonfigurować z `ykman`.
Uważam, że każdy zasługuje na bezpieczeństwo lepsze niż niektóre korporacje chciałyby żebyście mieli. 