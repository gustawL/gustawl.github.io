---
date: 2026-03-02
title: SEO
id: "20260302081318"
tags:
  - umiejętności
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja: _02.03.2026_
## Rozwiązane problemy
### Quartz 4, atomowe notki i indeksowanie
Wpisując swoje imię do przeglądarki "Bing"-  zauważyłem, że jest spory bałagan. 
Zacząłem się martwić, że publikowanie "nieukończonych atomowych notatek" narobi jeszcze większego bałaganu.

I ta obawa była słuszna [^1].

Atomowość nie jest problemem. Problemem jest atomowość bez rozdzielenia „publiczne” od „indeksowalne”.
Notki „dla mnie / journaling / przypominajki” → ustaw `noindex` (mogą być linkowane z MoC, ale nie w wynikach Google).
MoC i strony „evergreen / przewodniki” → indeksuj.

#### Jak rozwiązałem problem?
Proof of work: [Dodanie flagi do metadanych](https://github.com/gustawL/gustawl.github.io/commit/31bad123251e162d4e4742e96d334f8759cd3570), 

### Gdzie umieścić robots.txt w Quartz 4?
Ścieżka: 
```path
quartz/content/
```

**Źródło:** https://github.com/jackyzha0/quartz/issues/1042#issuecomment-2116303333

[^1]: [Block Search Indexing with noindex | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/crawling-indexing/block-indexing)