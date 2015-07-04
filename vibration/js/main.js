'use strict';

window.onload = function()
{
  document.getElementById('vibrationButton').onclick = function() {
    navigator.vibrate(0);
    navigator.vibrate([1000, 500, 2000]);
  };
}

