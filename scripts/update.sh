#!/bin/sh

sed -i '/OneThirdWindows/d' ~/.config/kglobalshortcutsrc
plasmapkg2 --type=kwinscript -r .
zip -r movewindowtocenter.kwinscript contents/ LICENSE metadata.desktop
plasmapkg2 --type=kwinscript -i .
kwin_x11 --replace &
