---
date: 2026-04-12
title: Skrypt QEMU, mój template
id: "20260412134833"
tags:
  - bash
  - qemu
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _19.04.2026_

Ten skrypt tworzy guest VM QEMU+KVM. Jest to jedynie template z placeholderami do przyszłego użycia.
- Firmware UEFI, OVMF
- główny dysk to plik `qcow2`
- sieć to emulowana karta `e1000` podpięta do nieuprzywilejowanego NAT-u
- część USB jest przepuszczana z hosta
- grafika i audio GPU są przekazywane bezpośrednio jako urządzenie PCI przez VFIO.

Link do skryptu.
- https://github.com/gustawL/scripts/blob/master/qemu-vm/template-vm.bash
## Argumenty
Skrypt przyjmuje 3 argumenty
1. `drive_file="${1:-}"` - plik dysku
2. `iso_file="${2:-}"` - plik obrazu (opcjonalny argument)
3. `boot_mode="${3:-bootdisk}"` - pozwala na wybór (czy bootować z qcow2 czy z obrazu iso)

Przykładowe użycie (jeśli OS jest zainstalowany, można pominąć drugi argument):
``` bash
./template-vm.bash template-vm.qcow2 distro.iso bootiso  
```