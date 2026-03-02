---
date: 2025-12-19
title: Podpisywanie commits
id: "20251219163457"
noindex: true
tags:
  - git
  - windows
---
> [!info] Ostatnia aktualizacja: _26.02.2026_

**Screenshot**:<br>
![Terminal output showing Git commit signing failure due to SSH keygen fork error and resource unavailability on Windows](20251215173045.png)
## Co zadziałało?
```git
git config --global gpg.ssh.program "C:/Windows/System32/OpenSSH/ssh-keygen.exe"
```