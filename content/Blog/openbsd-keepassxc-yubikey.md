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

Winowajca? **daemon pcscd**! TL;DR -> **wyłączcie go**. 

Po ostatniej fali wycieków danych w Polsce oraz antykonsumenckich praktyk niektórych korporacji ... przypomniałem sobie, że o własne bezpieczeńtwo muszę zadbać sam.

Odkurzyłem więc najlepiej nadający się system operacyjny do użytku (OpenBSD ma domyślnie sanboxowaną przeglądarkę).

Niestety ostatnio (może rok, lub dwa lata temu) kiedy chciałem stworzyć bazę haseł w keepassxc i zabezpieczyć ją kluczem yubikey ... pojawiał mi błąd w konsoli:

Nie tak dawno premierę miał nowy release 7.9 https://www.openbsd.org/79.html
Z tej okazji postanowiłem spróbować jeszcze raz... tym razem z pomocą sztucznej inteligencji (zaczynają mi się podobać te AI!). 

Odpaliłem pełen update z 7.8 do 7.9, w tym programy.
Uruchomiłem keepassxc (ten build z yubikey), przeklikałem się do "add additional protection" ... no i kurczę w konsoli zobaczyłem

> Hardware key USB error: other/unknown error

Wytłumaczyłem niebiałkowej sztucznej inteligencji, że system przecież widzi yubikey i pcscd też (`pcsc_scan`). Później dodałem, że libusb jest... keepassxc-yubikey? jest... pcsc-lite? no jest...

AI wspomniało, że keepassxc realizuje challange-response przez bibliotekę `ykcore` oraz interface USB. Model zaproponował by wykonać test ...

``` 
ykchalresp -1 test
```

output:
> USB error: Other/unknown error

Na bazie powyższego outputu zaproponowała następnie by wyłączyć daemona pcscd:
``` ksh
rcctl stop pcscd
```

Kiedy zobaczyłem losowy ciąg znaków (output który powinien być) zdębiałem - działa.
Jak model to wyjaśnił? pcscd podobno kolidował z dostępem do yubikey przez usb, którego potrzebuje keepassxc jak i ykchalresp. 

Chyba czas skonfigurować klucze i ogarnąć życie cyfrowe.