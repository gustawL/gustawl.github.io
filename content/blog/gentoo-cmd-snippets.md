---
title: Gentoo command-line snipppets
tags:
  - "#gentoo"
  - cmdline
  - micropost
date: 2025-12-24
id: "20251224002355"
hideFolderListing: true
---
## Emerge specific kernel version
Assuming (for example) You want version 5.10.42:
``` sh
sudo emerge sys-kernel/gentoo-sources:5.10.42
```

## How do I find package version number?
Use equery:
``` sh
equery list -po sys-kernel/gentoo-sources
```
