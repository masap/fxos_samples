'use strict';

window.onload = function()
{
  var time = (new Date()).setTime((new Date()).getTime() + 5 * 1000);
  var request = navigator.mozAlarms.add(time, 'ignoreTimezone',
    { mydata: '123' });
  request.onsuccess = function (e) {
    document.getElementById('alarmResult').innerHTML = 'Alarm ID: ' +
      e.target.result + ' registered';
  };
  request.onerror = function (e) {
    document.getElementById('alarmResult').innerHTML = e.target.error.name;
  };
  navigator.mozSetMessageHandler('alarm', function(message) {
    document.getElementById('alarmResult').innerHTML =
      'ID: ' + message.id + ', data:' + message.data.mydata;
  });
}

