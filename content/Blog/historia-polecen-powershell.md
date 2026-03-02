---
date: 2025-12-28
title: Historia poleceń w Powershell
id: "20251228022103"
noindex: true
tags:
  - windows
hideFolderListing: true
---
> [!info] Ostatnia aktualizacja: _26.02.2026_
## Rozwiązanie
```powershell
Get-Content (Get-PSReadLineOption).HistorySavePath
```

Lub poprzez notepad:
```powershell
notepad (Get-PSReadLineOption).HistorySavePath
```
## Problem
Chciałem sprawdzić jakich komend używałem zanim bezmyślnie zamknąłem powershell. Próbowałem `History` i `Get-History`. <br>
Przypadkiem natrafiłem na info, że PSReadLine zapisuje wpisane polecenia do pliku domyślnie. Co za szczęście. 