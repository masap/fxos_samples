'use strict';

window.onload = function()
{
  window.addEventListener('userproximity', function(e) {
    document.getElementById('userProximity').innerHTML =
      e.near ? 'near' : 'far';
  });

  window.addEventListener('deviceproximity', function(e) {
    document.getElementById('deviceProximity').innerHTML =
      e.value + ' (' + e.min + '-' + e.max + ')';
  });
}

