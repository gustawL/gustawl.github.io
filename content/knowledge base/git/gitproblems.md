---
date: 2025-12-19
title: problems
id: "20251219163457"
tags:
  - git
  - ssh
  - commit
  - gpg
---
## I can't sign message
![[Screenshot 2025-12-15 173045.png]]
What worked? pointing Git to the windows openssh:
```git
git config --global gpg.format ssh
```

```git
git config --global gpg.ssh.program "C:/Windows/System32/OpenSSH/ssh-keygen.exe"
```

## I typed incorrect title for commit
![[Screenshot 2025-12-20 072128.png]]
<br>
### What i did
I determined commit hash
```
git log --oneline --decorate
```

I got `a8cf76b`, so i proceed with rebase. 

