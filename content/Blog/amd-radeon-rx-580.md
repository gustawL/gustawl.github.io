---
date: 2026-03-02
title: AMD Radeon RX 580
id: "20260302052804"
tags:
hideFolderListing: true
---
> [!info] Ostatnia aktualizacja: _02.03.2026_
## Linux

### Artefakty / Rainbow screen
#problem

Problem: Gdy odpalam jakąś wymagającą dla karty graficznej aplikacje -> mój ekran się wywala, na ekranie jest "tęcza" -> ciężko coś zobaczyć, czy w ogóle zrobić

#### Fix
Ustawienie "performance level" z auto na high [AMDGPU - ArchWiki](https://wiki.archlinux.org/title/AMDGPU#Screen_artifacts_and_frequency_problem)

Edytujemy plik "==power_dpm_force_performance_level==", zmieniamy "auto" -> na "high"
``` bash
sudoedit /sys/class/drm/card0/device/power_dpm_force_performance_level
```

 Po reboocie niestety z powrotem wraca na "auto", jeśli chcemy zmianę na stałe ([Startup on boot](https://wiki.archlinux.org/title/AMDGPU#Startup_on_boot)):
 Tworzymy plik ==/etc/udev/rules.d/30-amdgpu-low-power.rules==, a w nim zapisujemy:
 ``` bash
 ACTION=="add", SUBSYSTEM=="drm", DRIVERS=="amdgpu", ATTR{device/power_dpm_force_performance_level}="high"
 ```