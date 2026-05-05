---
date: 2026-05-05
title: Wireshark (rootless)
id: "20260505122727"
tags:
  - sieci
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja _05.05.2026_

Wireshark to program do analizy ruchu sieciowego. Przydaje się szczególnie jak stawiamy minimalistyczny system (minimum programów i usług - niby każdy wie ... nikt nie stosuje xD). Czy testujesz jakąś dystrybucję linuxa ... czy może chcesz zobaczyć jakie usługi robią szum, potrzebujesz ustalić co wywalić (robisz selekcję). Wiele dystrybucji linuxa domyślnie też może zawierać zbędne usługi, warto o tym pamiętać. Ludzie na zagranicznym youtube którzy robią "distro review" zwykle nie robią żadnego technicznego review. Poklikają po okienkach, popatrzą jaki piękny jest interface... i dla nich to jest "review" - to nie jest review i mi szata graficzna nic nie mówi o systemie.  

- Wireshark w akcji i co pozwala ustalić: "Has Windows become Spyware?", PC Security Channel, https://www.youtube.com/watch?v=IT4vDfA_4NI
- "Sieci komputerowe odc 7 ... program Wireshark", Pasja informatyki https://www.youtube.com/watch?v=ujBQx46Dqr8
---

Poniższy sposób pozwala zwykłemu użytkownikowi przechwytywać pakiety w Wiresharku bez uruchamiania całego Wiresharka jako `root`. W przeróżnych dystrybucjach robi to się różnie (zanim coś zrobisz sprawdź). Poniższe testowane było na gentoo.

## Grupy, uprawnienia

Po instalacji wireshark dodaj grupę i przypisz aktualnego usera do grupy
```
 sudo groupadd wireshark && sudo usermod -a -G wireshark $USER
```

Uprawnienia
```
sudo chgrp wireshark /usr/bin/dumpcap && sudo chmod 750 /usr/bin/dumpcap
```
## POSIX Capabilities
Efekt nie jest "persistent", więc po reboocie znika. 
```
sudo setcap cap_net_raw,cap_net_admin=eip /usr/bin/dumpcap
```

---

Tu trzeba uważać. To nie jest uniwersalny wymóg Wiresharka na Linuksie. libpcap jest biblioteką używaną do przechwytywania pakietów, ale samo członkostwo w grupie pcap nie jest standardowym mechanizmem Linuxa dla Wiresharka. Ja używam. 
```
sudo usermod -aG pcap $USER
```