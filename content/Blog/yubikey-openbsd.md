---
date: 2026-11-22
title: Yubikey w OpenBSD
id: "20261122134115"
tags:
  - openbsd
  - yubikey
  - cyberbezpieczeństwo
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _22.11.2026_

Konfiguracja kluczy YubiKey na OpenBSD nie była łatwa, ale na pewno satysfakcjonująca. Miałem jeden wolny YubiKey do zabawy i podczas konfiguracji doszedłem do wniosku, że w sumie warto mieć trzeci na wypadek migracji. Zwykle ma się minimum dwa – identycznie skonfigurowane.
## Reset klucza

> [!warning] Zanim zresetujesz klucz
> Nie resetuj klucza, którego obecnie używasz – grozi to utratą dostępu. Przed wykonaniem tej operacji upewnij się, że nie zablokujesz sobie możliwości logowania do żadnego ze swoich kont. Reset trwale usuwa wszystkie dane zapisane na kluczu, w tym klucze dostępu i poświadczenia logowania.
> Ten blog to nie poradnik - jak nie wiesz co robisz, to tego nie rób. 

Zacznę od rzeczy mniej problematycznych.

**Reset OpenPGP**:
``` ksh
ykman openpgp reset
```

**Reset OTP**:
``` ksh
ykman otp delete 1
```

``` ksh
ykman otp delete 2
```

**Reset OATH**:
``` ksh
ykman oath reset
```

Więcej na kluczu nie konfigurowałem i mój reset ograniczał się do OpenPGP, OTP, OATH oraz FIDO2.
Z tym ostatnim pojawił się mały problem... ^^"

W przeciwieństwie do Linuxa, nie było `fido2-token` pod ręką ani niczego fancy. 
Mało tego, standardowe komendy w `ykman`, typu `ykman fido access change-pin` czy `ykman fido reset`, nie działały...

Z początku, widząc to, pomyślałem, że może odpalę FreeBSD i tam się to zrobi... ale nawet tam wspomniane komendy związane z FIDO2 po prostu nie działały.

Chciałem to sobie odpuścić i wrócić z tym problemem na Linuxa, ale nagle przypomniałem sobie, że w OpenBSD `libfido2` jest "wbudowane" (w system bazowy). Miałem nadzieję, że obsługa FIDO2 zadziała, jeżeli sam sobie ją napiszę w C. Nie było sensu pisać czegoś dużego – potrzebowałem czegoś małego do sprawdzenia, czy to w ogóle będzie działać. Na Windowsie, w YubiKey Managerze, zresetowałem sobie FIDO2 całkowicie i jedynie ustawiłem testowy (prosty) PIN. Mój pomysł był taki, żeby napisać program na OpenBSD, który sprawdzi poprawność mojego PIN-u FIDO2.

Efektem tego był poniższy kod (wiem, że jest brzydki, ale miał po prostu działać):
- https://github.com/gustawL/fido2-openbsd/blob/master/verify_passphrase.c

Z początku nie używałem `readpassphrase` [^1], nie wiedziałem nawet, że coś takiego istnieje.
Dopiero widok PIN-u w czystym tekście zmotywował mnie do poszukania jakiegoś bezpieczniejszego rozwiązania – po prostu krew mnie zalewała, jak to widziałem. Po testach, widząc, że mój sposób działa, wziąłem się za napisanie resetu FIDO2 [^2], ustawiania PIN-u [^3] oraz zarządzania poświadczeniami zapisanymi na urządzeniu [^4].

Po wszystkim zresetowałem sobie FIDO2, ustawiłem docelowy PIN i wygenerowałem parę kluczy do podpisu commitów:
``` ksh
ssh-keygen -t ed25519-sk -O resident -O verify-required -O application=ssh:gitsign -C "git commit signing" -f ~/.ssh/git-commit-sign-sk
```

Następnie mogłem już bez swoich prowizorycznych narzędzi zrobić challenge-response dla KeePassXC:
``` ksh
ykman otp chalresp --generate --touch 1
```

Do samego utworzenia nowej bazy (oraz jej zabezpieczenia), rejestracji klucza i logowania na swoje konta czy podpisywania commitów w Gicie – mi to wystarczyło do migracji. Pozostałe klucze chcę porządniej skonfigurować, ponieważ chcę się pobawić z [[custom-chain-of-trust|Secure boot, własnym MOK]]. No ale na czas zabawy muszę mieć dostęp – i tutaj ten trzeci klucz zapasowy się przydał.

## Dlaczego OpenBSD jest takie dobre?
Wielu ludzi pewnie pomyśli, że „utrudniam sobie życie” albo coś w tym stylu.
Podobne głupie teksty słyszałem na temat dbania o swoje bezpieczeństwo – „Nie przesadzasz z tymi zabezpieczeniami, hasłami?”. Domyślam się, co muszą przeżywać eksperci od cyberbezpieczeństwa.

OpenBSD dla jednych może być „ograniczony”, ale dla kogoś, kto ceni sobie minimalizm – te ograniczenia to paradoksalnie zaleta. Czy wiesz, że Linus Torvalds napisał jądro Linuxa dlatego, że w używanym przez niego MINIX-ie brakowało mu konkretnych funkcji i pisał od zera własny emulator terminala? [^5] Osobiście uważam, że najlepsze środowisko do nauki to takie, w którym właśnie „nic nie działa”. Jeżeli zderzasz się z murem, jeżeli czegoś nie ma – powstaje **potrzeba**, a potrzeba jest matką wynalazków. Zawsze szanowałem ludzi, którzy cenili minimalizm w środowiskach koderskich. Czuję, że być może oni to w pewien sposób rozumieją.

---

Ja ten swój brzydki kod kiedyś poprawię. 

[^1]: OpenBSD man pages, https://man.openbsd.org/readpassphrase.3

[^2]: https://github.com/gustawL/fido2-openbsd/blob/master/reset_fido2.c

[^3]: https://github.com/gustawL/fido2-openbsd/blob/master/set_pin_fido2.c

[^4]: https://github.com/gustawL/fido2-openbsd/blob/master/credmgn.c

[^5]: August Lilleaas, *Linux exists only because of a happy accident*, https://www.augustl.com/blog/2019/linus_and_linux_happy_accident/
