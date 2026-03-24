---
date: "2026-03-24"
title: "Obsidian"
id: "20260324010451"
tags:
hideFolderListing: true
noindex: true
---
> [!info] Ostatnia aktualizacja: 24.03.2026
## Rozwiązane problemy
### Nieodpowiednia grupa, właściciel
Obecnie śmigam na swoim [[glowny-host|głównym hoście]]. W trakcie mojego powrotu do tematu [[SEO]]... zauważyłem, że nie mogę dodać nowej notki w obsidianie. Program odmawiał "współpracy". Przez moment nawet myślałem, że to "bug" ale nie mam tyle szczęścia ([[o-mnie-kontakt|chciałbym umieć pisać raporty]] ... ). 
### Przyczyna?
katalog (powszechnie znany jako "folder") inbox, oraz templates miał niewłaściwe uprawnienia. Musiałem przerzucić te dwa katalogi z windowsa na [[glowny-host|linuxa]]. Najwidoczniej po drodze coś poszło nie tak skoro przerzucone katalogi miały uprawnienia roota a nie usera... Czeka mnie powrót do pewnych podstaw. 

Katalog [^1] `inbox` oraz `templates` miały niewłaściwego właściciela. Wcześniej przerzuciłem te dwa katalogi z Windowsa na swojego [[glowny-host|Linuksa]]. Najwidoczniej po drodze coś poszło nie tak, skoro przeniesione pliki należały do `root`, a nie konta usera... Czeka mnie powrót do pewnych podstaw.


Co zrobiłem? 
Użyłem polecenia `chown` który zmienia właściciela i grupy
``` bash
sudo chown $USER:$USER inbox/*
```
Analogicznie postąpiłem z katalogiem dla szablonów notek. 

Jak zweryfikowałem wynik?
``` bash
ls -halt inbox/
```

---

### Szybkie poprawienie błędu
Gdy czytam na telefonie w wolnej chwili i zauważę błąd (np. ortograficzny) mogę szybko w wyszukiwarce obsidiana wpisać część lub całe słowo. Nie muszę szukać po katalogach, przeklikiwać się ... jestem w stanie w sposób szybki zareagować i zrobić poprawkę w konkretnym miejscu. Generalnie takie coś w edycji to nic nadzwyczajnego, ale na automacie człowiek może się "zapomnieć" 😜Często gdy robimy coś nowego, po kilku dniach zaczyna nam się wszystko mylić, gubimy się... i nawet o rzeczach prostych jesteśmy w stanie zapomnieć. Tu może nie całkiem chodzi o to, że "zaczynam" ... na automacie też zdarza mi się zboczyć z nawyku. 

W moim setupie minus jest taki, że muszę jeszcze commit zrobić. Za jakiś czas, jak tu będzie więcej treści i mniej moich monologów, czy przemyśleń które niekoniecznie wnoszą coś dla innych... Wskoczę na obsidian publish. ~~Jest też opcja by ogarnąć jak taki digital garden można zrobić w org-mode. Bez tego grafu byłbym w stanie przeżyć~~. Nie, graf jest zbyt piękny.
![[2026000000000.png]]

[^1]: Znany powszechnie jako "folder" ;)
