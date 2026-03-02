---
title: Gentoo - komendy, polecenia, snippety
tags:
  - "#gentoo"
date: 2025-12-24
id: "20251224002355"
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja: _26.02.2026_
## Instalacja wybranej wersji pakietu
Załóżmy, że chcesz kernel w wersji 6.18.1:
``` sh
sudo emerge sys-kernel/gentoo-sources:6.18.1
```
## Jak znaleźć konkretną wersję programu?
``` sh
equery list -po sys-kernel/gentoo-sources
```
