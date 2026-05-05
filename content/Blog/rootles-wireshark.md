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

Wireshark to program to analizy ruchu sieciowego. Przydaje się szczególnie jak stawiamy minimalistyczny system (minimum programów i usług - niby każdy wie ... nikt nie stosuje xD).

Wireshark w akcji i co pozwala ustalić: "  
Has Windows become Spyware?", PC Security Channel, https://www.youtube.com/watch?v=IT4vDfA_4NI

---

Poniższy sposób pozwala zwykłemu użytkownikowi przechwytywać pakiety w Wiresharku bez uruchamiania całego Wiresharka jako `root`. W przeróżnych dystrybucjach robi to się różnie (zanim coś zrobisz sprawdź). Poniższe testowane było na gentoo.

Po instalacji wireshark dodaj grupę i przypisz aktualnego usera do grupy
```
 sudo groupadd wireshark && sudo usermod -a -G wireshark $USER
```

Uprawnienia
```
sudo chgrp wireshark /usr/bin/dumpcap && sudo chmod 750 /usr/bin/dumpcap
```
POSIX Capabilities
```
sudo setcap cap_net_raw,cap_net_admin=eip /usr/bin/dumpcap
```

---

Tu trzeba uważać. To nie jest uniwersalny wymóg Wiresharka na Linuksie. libpcap jest biblioteką używaną do przechwytywania pakietów, ale samo członkostwo w grupie pcap nie jest standardowym mechanizmem Linuxa dla Wiresharka. Ja używam. 
```
sudo usermod -aG pcap $USER
```