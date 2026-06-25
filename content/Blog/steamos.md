---
date: 2026-06-25
title: SteamOS
id: "20260625051548"
tags:
- gaming
hideFolderListing: true
noindex: false
---

> [!info] Ostatnia aktualizacja _25.06.2026_

Będzie co testować. Valve udostępniło obraz instalacji swojego systemu operacyjnego do gier. <br>
Z listy zmian zaciekawiło mnie następujące "Dodano wstępną obsługę uruchamiania jako guest na wirtualnej maszynie (sterowniki VirtIO).". <br>
Czyli mogę przetestować u siebie w [[qemu|QEMU]] (mam nadzieję). <br> 
Spróbuję znaleźć okienko czasowe i przetestować. Tryb desktop używa domyślnie protokołu Wayland (to display protocol który wypiera X11). <br>
Dla większości znaczy to tyle, że jeżeli kupujesz sprzęt tylko do gier -> nie musisz mieć windowsa jeśli nie potrzebujesz. <br>
Popełnilem błąd, mogłem brać chromebooka ...

## EULA
"1.1 License Grant. Valve hereby grants, and by installing Steam Client you hereby accept, a limited, non-exclusive, non-redistributable, non-sublicenseable license to install and use Steam Client on your computers solely for your personal use.". <br><br>
Jeżeli będzie to fajnie działać a w trybie desktop będę mógł zainstalować coś z GOG Galaxy... to świetnie. Osobny system operacyjny do gier by się przydał.

## Źródła
- "Why Valve Doesn’t Care About Selling Steam Machines", Water CS2, https://www.youtube.com/watch?v=2VArYaoLrqg
- Wydarzenia w Steam Deck - Oficjalna strona Steam, https://store.steampowered.com/news/app/1675200/view/697641379212298072
- "Już dzisiaj premiera Steam Machine!", Oficjalna strona Steam, https://steamcommunity.com/groups/steam_hardware/announcements/detail/68525711465487024

## Notka do siebie
libvirt mimo wszystko będzie potrzebny. Bez CPU pinning nie będzie performance. <br>
Głównie jest wspierany hardware z AMD, widocznie NVIDIA jeszcze tych nowych otwartych sterowników nie ma. 
