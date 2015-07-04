'use strict';

window.onload = function()
{
  window.addEventListener('devicelight', function(e) {
    document.getElementById('deviceLight').innerHTML = e.value;
  });
}

