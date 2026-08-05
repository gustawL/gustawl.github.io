---
title: Gentoo - komendy, polecenia, snippety
tags:
  - linux
date: 2025-12-24
id: "20251224002355"
hideFolderListing: true
noindex: true
status: to review
---
> [!info] Ostatnia aktualizacja: _05.08.2026_
## Instalacja wybranej wersji pakietu
Załóżmy, że chcesz kernel w wersji 6.18.1:
``` sh
sudo emerge sys-kernel/gentoo-sources:6.18.1
```
## Jak znaleźć konkretną wersję programu?
``` sh
equery list -po sys-kernel/gentoo-sources
```

## Listowanie usług
Wszystkie
```cmd
rc-status --all
```

## Ebuilds
### info i statystyki
```cmd
genlop -i foo
```

## Equery
Dostępne wersje pakietu/programu
```cmd
equery list -po foo
```

Alternatywnie
```cmd
equery y harfbuzz
```