# OneThirdWindows

Shortcuts to move windows to the one third or two thirds of the screen for KDE.

Special thanks: this litte work is inspired by [UltrawideWindows](https://github.com/lucmos/UltrawideWindows) and reuse some of its code.

# Installation

```bash
git clone git@github.com:ljk5403/OneThirdWindows.git
cd OneThirdWindows
plasmapkg2 --type=kwinscript -i .
kwin_x11 --replace &
```

# Shortcuts

> Some shortcuts is comflict with Bismuth, please resign them under `System Settings > Shortcuts > Shortcuts > KWin`.

| Shortcuts                               | Commands      |
| --------------------------------------- | ------------- |
| OneThirdWindows: Move Window to left 1/3 | Meta+Shift+J |
| OneThirdWindows: Move Window to Middle 1/3 | Meta+Shift+K |
| OneThirdWindows: Move Window to Right 1/3 | Meta+Shift+L |
| OneThirdWindows: Move Window to Left 2/3 | Meta+Alt+J |
| OneThirdWindows: Move Window to Right 2/3 | Meta+Alt+L |


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
