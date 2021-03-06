# OneThirdWindows

Shortcuts to move windows to the one third or two thirds of the screen for KDE.

Now also support to move windows to the 0/3 corner of the screen.

Special thanks: this little work is inspired by [UltrawideWindows](https://github.com/lucmos/UltrawideWindows) and reuses some of its code.

![](photos/exp1.png)

![](photos/exp2.png)

# Installation

From KDE Store: [OneThirdWindows - KDE Store](https://store.kde.org/p/1720936)

Or install manually:

```bash
git clone git@github.com:ljk5403/OneThirdWindows.git
cd OneThirdWindows
plasmapkg2 --type=kwinscript -i .
kwin_x11 --replace &
```

# Shortcuts

> Some shortcuts conflict with Bismuth and may conflict with others. Please resign them manually under `System Settings > Shortcuts > Shortcuts > KWin`.

| Shortcuts                               | Commands      |
| --------------------------------------- | ------------- |
| OneThirdWindows: Move Window to left 1/3 | Meta+Shift+J |
| OneThirdWindows: Move Window to Middle 1/3 | Meta+Shift+K |
| OneThirdWindows: Move Window to Right 1/3 | Meta+Shift+L |
| OneThirdWindows: Move Window to Left 2/3 | Meta+Shift+I |
| OneThirdWindows: Move Window to Right 2/3 | Meta+Shift+O |
| OneThirdWindows: Move Window to Right Up 2/3 | Meta+Shift+U |
| OneThirdWindows: Move Window to Right Down 2/3 | Meta+Shift+B |
| OneThirdWindows: Move Window to Left Up 2/3 | Meta+Shift+Y |
| OneThirdWindows: Move Window to Left Down 2/3 | Meta+Shift+V |


# Update

```bash
$ cd UltrawideWindows
$ ./scripts/update.sh
```

# Remove

```bash
$ cd UltrawideWindows
$ plasmapkg2 --type=kwinscript -r .
```
