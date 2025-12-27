---
date: 2025-12-19
title: I can't sign commit...
id: "20251219163457"
tags:
  - git
  - ssh
  - commit
  - problem
  - snippet
---
**Screenshot**:<br>
![[Screenshot 2025-12-15 173045.png]]
What worked? pointing Git to the windows openssh:
```git
git config --global gpg.ssh.program "C:/Windows/System32/OpenSSH/ssh-keygen.exe"
```