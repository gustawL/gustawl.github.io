---
date: 2026-06-25
title: SteamOS
id: "20260625051548"
tags:
- gaming
hideFolderListing: true
noindex: false
---

> [!info] Ostatnia aktualizacja _11.07.2026_

Będzie co testować. Valve udostępniło obraz instalacji swojego systemu operacyjnego do gier. <br>
Z listy zmian zaciekawiło mnie następujące "Dodano wstępną obsługę uruchamiania jako guest na wirtualnej maszynie (sterowniki VirtIO).". <br>
Czyli mogę przetestować u siebie w [[qemu|QEMU]] (mam nadzieję). <br> 
Spróbuję znaleźć okienko czasowe i przetestować. Tryb desktop używa domyślnie protokołu Wayland (to display protocol który wypiera X11). <br>
Dla większości znaczy to tyle, że jeżeli kupujesz sprzęt tylko do gier -> nie musisz mieć windowsa jeśli nie potrzebujesz. <br>
Popełnilem błąd, mogłem brać chromebooka ...

## EULA
"1.1 License Grant. Valve hereby grants, and by installing Steam Client you hereby accept, a limited, non-exclusive, non-redistributable, non-sublicenseable license to install and use Steam Client on your computers solely for your personal use.". <br><br>
Jeżeli będzie to fajnie działać a w trybie desktop, będę mógł zainstalować coś z GOG Galaxy... to świetnie. Osobny system operacyjny do gier by się przydał.

## Źródła
- "Why Valve Doesn’t Care About Selling Steam Machines", Water CS2, https://www.youtube.com/watch?v=2VArYaoLrqg
- Wydarzenia w Steam Deck - Oficjalna strona Steam, https://store.steampowered.com/news/app/1675200/view/697641379212298072
- "Już dzisiaj premiera Steam Machine!", Oficjalna strona Steam, https://steamcommunity.com/groups/steam_hardware/announcements/detail/68525711465487024
- "Valve will finally let you build your own Steam Machine with SteamOS for desktop", The Verge, https://www.theverge.com/games/953411/valve-steamos-desktop-nvidia
- "Valve + NVIDIA Team Up: SteamOS Is Coming to Your Gaming PC", Ton Does Linux and More!, https://www.youtube.com/watch?v=JuJA2mrHyds

## Notka do siebie
libvirt mimo wszystko będzie potrzebny. Bez CPU pinning nie będzie performance. <br>
Głównie jest wspierany hardware z AMD, widocznie NVIDIA jeszcze tych nowych otwartych sterowników nie ma. 

## Pierwsze instalacje innych
Podczas gdy w sieci zajmują się nieistotnym tematem ceny steam machine, scena techniczna świętuje. <br>
Valve nas ocaliło. Wcześniej człowiek musiał poświęcić czas by zainstalować sobie linuxa, dostosować go do jednego zadania np. gamingu (dodajcie do tego tuning systemu, ustawienia kernela, patche i inne czasochłonne rzeczy wymagające wiedzy). <br>
Niektórzy chcieli mieć osobną maszynę do gier z sprzętem który nie trzeba wymieniać co x lat. Wszędzie jest ta chora presja na kupno nowego urządzenia, <br>
widzimy to na przykładzie smartfonów. Istnieje coś takiego jak okres wsparcia oprogramowania (aktualizacje które powinny być z względów bezpieczeństwa), <br>
gdy ten okres wsparcia się skończy - MUSISZ kupić nowe urządzenie... w przypadku smartfonów problem jest poważniejszy - nie ma alternatyw.
- "I Installed Steam OS On My Gaming PC - Here's How It Went!", PC Centric, https://www.youtube.com/watch?v=zN1V6lKIAgs
- "Re-Visiting SteamOS | SteamOS 3.8", Jov's Gaming Lounge, https://www.youtube.com/watch?v=H6uIgbZpP6M
- "I tried installing Steam OS", Brodie Robertson, https://www.youtube.com/watch?v=3PzEmiSDgd0

## Valve to przyszłość
Przynajmniej dla mnie. Przez ostatnie lata głównie siedziałem w open source, widziałem początki tego od strony technicznej. <br>
Na SteamOS można mieć bibliotekę z GOG (np. dzięki Heroic launcher), zwykle gdy mam wybór to biorę grę bez DRM właśnie na GOG. <br>
Po słowach Hideo Kojimy [^1] jestem tego pewien. Jasne, może nie będzie jakiejś wielkiej dominacji ... ale nie mam tyle czasu na gry co kiedyś. <br>
Na GOG wezmę co mnie interesuje, w razie czego jest instalator - a piractwo nie ma sensu ponieważ nikt normalny nie ufa binarkom z internetu (serio nie róbcie tego, nie ma nic za darmo). <br><br>
Normalny klient chce zapłacić czy to w formie płyty whatever, nie trzeba tego ucinać i zażynać. <br>
A wracając do czasu, patrząc na formę w jakiej został wydany baldurs gate 3 to nie mam presji czasu żeby zagrać w tym roku, za rok czy w trakcie urlopu. <br>
Dzięki SteamOS mogę rodzielić rozrywkę od nauki i pracy ... wiem, że są tacy heretycy którzy chcieliby mieć wszystko na jednym ale czy nie kusi by zrezygnować z wykonania czegoś konstruktywnego? <br>
Nie wiem jak inni ale generalnie dzisiaj to starczyłby chromebook (konto googla i tak używasz na telefonie), a do rozrywki? SteamOS. <br>
Do nauki rzeczy technicznych (jakiś python, open source) zawsze jest ten stary dobry Linux (nie, nie porzuciłem lektury "Twierdza linux"). <br>
Można teraz spokojnie wyłączyć komputer i wykonać instalację. 

Źródła
- "SteamOS as a Desktop OS? Browsing, Office, Printing, Local LLM and More!", Lon.TV, https://www.youtube.com/watch?v=OqkVACIARts
- "While We Argued About the Steam Machine, Valve Won", Zack Shutt, https://www.youtube.com/watch?v=jiyvi-6koFA

[^1]: Windows central, https://www.windowscentral.com/gaming/the-consequence-of-that-is-that-you-dont-actually-possess-the-data-yourself-there-are-companies-that-own-these-servers-and-let-you-turn-the-tap-for-a-monthly-fee-hideo-kojima-speaks-on-the-death-of-physical-media
