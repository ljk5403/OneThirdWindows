function reposition(client, newX, newY, w, h) {
  client.frameGeometry = {
    x: newX,
    y: newY,
    width: w,
    height: h
  }
}

function moveThird(workspace, numberColumns, columnsToFill){
  var client = workspace.activeClient;
  var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
  if (client.moveable && client.resizeable) {
    client.setMaximize(false,false);
    var columnWidth = Math.round(maxArea.width/3);
    var newX = maxArea.x + columnWidth * numberColumns,
        newY = maxArea.y,
        w = columnWidth * columnsToFill,
        h = maxArea.height;
    reposition(client, newX, newY, w, h)
  }
}

// Move one third
registerShortcut("MoveWindowToLeft1in3", "OneThirdWindows: Move Window to left 1/3", "Meta+Shift+J", function () {
  moveThird(workspace, 0, 1)
});

registerShortcut("MoveWindowToMiddle1in3", "OneThirdWindows: Move Window to Middle 1/3", "Meta+Shift+K", function () {
  moveThird(workspace, 1, 1)
});

registerShortcut("MoveWindowToRight1in3", "OneThirdWindows: Move Window to Right 1/3", "Meta+Shift+L", function () {
  moveThird(workspace, 2, 1)
});

registerShortcut("MoveWindowToLeft2in3", "OneThirdWindows: Move Window to Left 2/3", "Meta+Shift+I", function () {
  moveThird(workspace, 0, 2)
});

registerShortcut("MoveWindowToRight2in3", "OneThirdWindows: Move Window to Right 2/3", "Meta+Shift+O", function () {
  moveThird(workspace, 1, 2)
});


// Column: 1/2, Row: 2/3
function moveCorner(workspace, numberColumns, numberRows){
  var client = workspace.activeClient;
  var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
  if (client.moveable && client.resizeable) {
    client.setMaximize(false,false);
    var columnWidth = Math.round(maxArea.width/2);
    var rowHeight = Math.round(maxArea.height/3);
    var newX = maxArea.x + columnWidth * numberColumns,
        newY = maxArea.y + rowHeight * numberRows,
        w = columnWidth,
        h = rowHeight * 2;
    reposition(client, newX, newY, w, h)
  }
}

registerShortcut("MoveWindowToRightUp", "OneThirdWindows: Move Window to Right Up 2/3", "Meta+Shift+U", function () {
  moveCorner(workspace, 1, 0)
});

registerShortcut("MoveWindowToRightDown", "OneThirdWindows: Move Window to Right Down 2/3", "Meta+Shift+B", function () {
  moveCorner(workspace, 1, 1)
});

registerShortcut("MoveWindowToLeftUp", "OneThirdWindows: Move Window to Left Up 2/3", "Meta+Shift+Y", function () {
  moveCorner(workspace, 0, 0)
});

registerShortcut("MoveWindowToLeftDown", "OneThirdWindows: Move Window to Left Down 2/3", "Meta+Shift+V", function () {
  moveCorner(workspace, 0, 1)
});

