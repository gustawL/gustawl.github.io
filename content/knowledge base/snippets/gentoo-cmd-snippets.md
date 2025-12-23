---
title: gentoo cmd snippets
tags:
  - "#gentoo"
  - cmdline
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
