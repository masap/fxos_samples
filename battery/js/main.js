'use strict';

function levelchange()
{
  var battery = navigator.battery;

  document.getElementById('batteryLevel').innerHTML =
    (battery.level * 100.0) + '%';
}

function chargingchange()
{
  var battery = navigator.battery;

  document.getElementById('chargingchange').innerHTML =
    battery.charging ? 'connected' : 'disconnected';
}

window.onload = function()
{
  var battery = navigator.battery;

  battery.addEventListener('levelchange', levelchange);
  battery.addEventListener('chargingchange', chargingchange);

  levelchange();
  chargingchange();
}
