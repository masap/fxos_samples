'use strict';

function orientationchange()
{
  document.getElementById('screenOrientation').innerHTML =
    window.screen.mozOrientation;
}


window.onload = function()
{
  var screen = window.screen;
  screen.onmozorientationchange = orientationchange;
  orientationchange();

  document.getElementById('lockOrientationButton').onclick = function() {
    document.getElementById('lockState').innerHTML =
      screen.mozLockOrientation(screen.mozOrientation) ?
      'locked' : 'lock failed';
  };

  document.getElementById('unlockOrientationButton').onclick = function() {
    screen.mozUnlockOrientation();
    document.getElementById('lockState').innerHTML = 'unlocked';
  };
}

