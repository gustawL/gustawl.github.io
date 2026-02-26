---
date: 2025-12-25
title: SEO - robots.txt
id: "20251225120809"
tags:
  - seo
hideFolderListing: true
---
> [!info] Ostatnia aktualizacja: _26.02.2026_

## Moje problemy i zmagania

### Quartz 4, atomowe notki i indeksowanie
Wpisując swoje imię do przeglądarki "Bing"-  zauważyłem, że jest spory bałagan. 
Zacząłem się martwić, że publikowanie "nieukończonych atomowych notatek" narobi bałaganu.
I słusznie, AI naprowadziła mnie na potencjalne rozwiązanie (jeszcze jej nie wierzę - ogarnę to next time). 

Atomowość nie jest problemem. Problemem jest atomowość bez rozdzielenia „publiczne” od „indeksowalne”.
Notki „dla mnie / journaling / przypominajki” → ustaw `noindex` (mogą być linkowane z MoC, ale nie w wynikach Google).
MoC i strony „evergreen / przewodniki” → indeksuj.
## Rozwiązane
### Gdzie umieścić robots.txt w Quartz 4?

Ścieżka: 
```path
quartz/content/
```

**Źródło:** https://github.com/jackyzha0/quartz/issues/1042#issuecomment-2116303333