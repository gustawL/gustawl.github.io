---
date: 2026-10-26
title: Własny Chain of Trust
id: "20261026205544"
tags:
  - cyberbezpieczeństwo
  - linux
  - openbsd
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _26.10.2026_

Przemyślałem sprawę z [[eacv2|EAC v2]]. 

Nie chcę mówić gdzie i u kogo taki komentarz widziałem ale wiem, że są ludzie którzy mogliby odnieść złe wrażenie. U jakiegoś youtubera, losowy gość odebrał krytykę na zasadzie "jeżeli krytykujesz, to nie masz pojęcia o bezpieczeństwie". Cóż secure boot jest potrzebny - ale tu nie chodzi o sam secure boot. 
Po prostu ktoś podczepił się pod sukces [[Blog/steamos|SteamOS]] i mówi ludziom co i jak mają bootować (ograniczając inne możliwości - w tym sam SteamOS). Domyślnie takie ubuntu też nie jest bezpieczne :P

Paradoksalnie cała ta sprawa z EasyAnticheat zainspirowała mnie do pomysłu stworzenia całej serii postów o tym jak zbudować swój Chain of trust z yubikey na OpenBSD, własnymi podpisanymi kluczami i secure boot.

Tak, secure boot jest potrzebny ale to **Ty** powinieneś decydować o swojej maszynie. 
W Gentoo można podpisać kernel samemu, nie potrzebujesz do tego osób trzecich. 

Nie wiem czy ten pomysł się nie wyłoży i do końca nie wiem na co się piszę...
ale sam przecież chciałem cyfrowej suwerenności.

Nie chcę żeby ktoś traktował tego jak poradnik - i **nie polecam nikomu mnie naśladować**.
Ja muszę jakoś zaprezentować wiedzę i spłacić dług wobec ludzi którzy mi ją dali (open source, free software).

Nie widzę obecnie pracy na horyzoncie, nie mam obecnie też pieniędzy by wesprzeć finansowo Gentoo czy inny projekt. Mogę za to podzielić się własnym doświadczeniem i eksperymentami (póki co). 

Jest mi ten pomysł po drodze ponieważ i tak chciałem na nowo postawić Gentoo (hardened z SElinux), zrobić porządek z życiem cyfrowym i przeczyścić maszyny. Nie pamiętam kiedy kupiłem tą pastę termoprzewodzącą i może bezpieczniej wziąć nową. 

Uczę się z książki "Twierdza Linux" i już dotarłem do tematów z LSM. Nawet trochę skrobałem w bubblewrap na githubie. Polecam tą książkę każdemu (Nikt mi za to nie płaci!), Linux **nie jest domyślnie bezpieczny**. 

Zrób sobie przysługę i ucz się na maszynie wirtualnej zanim wskoczysz w rabbit hole Linuxa.
Na Windowsie masz antywirus, i jesteś relatywnie bezpieczny. Ja wiele lat temu w szkole średniej popełniłem ten błąd, że wskoczyłem w to bez zastanawiania się czy jakiegoś backupu systemu.
Dla mnie to był "one way ticket". Nie bądź tak samo głupi. 

Są inne świetne książki typu "Biblia Linux" i serio... włóż jakiś wysiłek zanim coś zrobisz. 
To, że zainstalujesz linuxa na hoście - **nie oznacza, że jesteś secure by default**.
## Chain of trust - pomysł
Wczoraj wpadło mi do głowy pytanie - "czy secure boot jest możliwy na QEMU"? okazuje się, że **tak**.
Z czasem nagle zdałem sobie sprawę, że już coś mam [[openbsd-postinstall|OpenBSD - postinstalacja]] i mógłbym to rozwinąć w serię postów. Chcę zacząć od konfiguracji pary kluczy yubikey na OpenBSD (air gapped) i wykorzystać wygenerowane klucze prywatne na tych kluczach do podpisu np. kernela. 

Oczywiście przez cały proces konfiguracji Secure boot [^1] będę musiał przejść z metodą prób i błędów.
W praktyce może okazać się, że porywam się z motyką na słońce ale why not? Obecnie nic lepszego do roboty nie mam.

OpenBSD też warto znać, wiele lat temu deweloper kernela Greg Kroah-Hartman powiedział
"OpenBSD was right, security over performance." [^2]

Nie ma lepszych ludzi do nauki cybersecurity. U nas w Polsce rzecz jasna też są - czytam i oglądam ich od lat ale w praktyce warto sięgać do korzeni też. 
## Mała refleksja

Owszem jesteśmy równi. Wszyscy mamy dar życia, wszyscy kiedyś pójdziemy do piachu.
Natomiast nie jesteśmy równi statusem, majątkiem czy wykształceniem.

Nie musisz walczyć o żadną równość - już jesteśmy w pewnym sensie równi.
Nie prawdą jest, że nie ma rzeczy które by nas nie różniły od siebie (i tutaj nie jesteśmy równi).

"Nie ma ludzi nie zastąpionych" - **Nie daj sobie tego wmówić**, to kłamstwo PRL'u.
Nigdy nie będzie drugiej osoby takiej jak Ty i każdy powinien znać swoją wartość.
Nigdy żadna maszyna Cię nie zastąpi. 

Wiem jak to zabrzmi ale **nie mam sobie równych**.

[^1]: https://wiki.gentoo.org/wiki/Secure_Boot

[^2]: *OpenBSD was Right - Linux Kernel Developer Greg Kroah-Hartman*, https://www.youtube.com/watch?v=jI3YE3Jlgw8
