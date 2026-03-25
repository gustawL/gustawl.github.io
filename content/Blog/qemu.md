---
date: 2026-03-09
title: QEMU
id: "20260309231258"
tags:
  - wirtualizacja
hideFolderListing: true
noindex: true
status: permanent
---
> [!info] Ostatnia aktualizacja: _25.03.2026_

Oficjalna [dokumentacja QEMU](https://www.qemu.org/docs/master/about/index.html).
## Tworzenie nowego obrazu dysku

```bash
qemu-img create -f qcow2 Gentoo-VM.qcow2 45G
```

### Wyjaśnienie polecenia
- **qemu-img** – narzędzie QEMU do zarządzania obrazami dysków
- **create** – utworzenie nowego obrazu
- **-f qcow2** – format dysku **QCOW2**
- **Gentoo-VM.qcow2** – nazwa pliku
- **45G** – maksymalny rozmiar dysku

### QCOW2
Format **qcow2** ma kilka zalet:
- obsługuje **snapshoty**
- obsługuje **kompresję**
- plik **rośnie dynamicznie** (nie zajmuje od razu całych 45 GB)

---

## Dostęp SSH z hosta do maszyny wirtualnej

QEMU w trybie **user networking** pozwala na przekierowanie portów.

Dodaj do konfiguracji sieci (porty są przykładowe!):
```
hostfwd=tcp::2222-:22
```

Starsze opcje `-net` są stopniowo zastępowane przez `-nic`.

Zalecana składnia:

```bash
qemu-system-x86_64 \
-m 4096 \
-smp 4 \
-drive file=Gentoo-VM.qcow2,format=qcow2 \
-nic user,hostfwd=tcp::2222-:22
```

| Host (twój komputer) | VM (maszyna wirtualna) |
| -------------------- | ---------------------- |
| port **2222**        | port **22 (SSH)**      |

Czyli każde połączenie SSH na port **2222** hosta trafia do **SSH w VM**.

### Połączenie SSH z VM

Po uruchomieniu maszyny i włączeniu SSH:

```bash
ssh -p 2222 localhost
```

lub (nie testowałem):

```bash
ssh -p 2222 root@localhost
```

### SSH musi działać w VM

W systemie gościa (np. Gentoo):

```bash
rc-service sshd start
rc-update add sshd default
```