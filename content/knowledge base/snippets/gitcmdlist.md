---
date: 2025-12-17
title: git - commands
id: "20251217234835"
tags:
  - "#git"
  - "#cmdline"
---
| legend:                             |     |
| ----------------------------------- | --- |
| foo = any file, example: .gitignore |     |
|                                     |     |

---
## Basic git commands
### staging changes
```git
git add foo
```
Staging means preparing files for the next commit.<br>
It doesn’t actually save changes to the repository yet — it just moves them into the staging area.

### commit and describe change
```git
git commit -m "add foo"
```
> *best practices*: 
> - use a clear, descriptive commit message <br>(e.g., `git commit -m "Add foo utility to parse input and tests"`) <br>so others — and your future self — understand what changed without reading the diff.

### send changes
```git
git push
```

> *best* *practices*:<br>
> - run it when you’re ready to share your work or back it up; don’t push
> unfinished or sensitive work you don’t want others to see.