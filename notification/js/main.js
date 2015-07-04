'use strict';

// https://developer.mozilla.org/ja/docs/WebAPI/Using_Web_Notifications

window.addEventListener('load', function () {
  // 通知する許可があるかを確認します
  if (Notification && Notification.permission !== 'granted') {
    // 許可を得ていないので、許可を求めます
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

  var notificationButton = document.getElementById('notificationButton');

  notificationButton.addEventListener('click', function () {
    if (!Notification) {
      alert('通知機能がサポートされていません');
      return;
    }

    if (Notification.permission === 'denied') {
      alert('通知機能が許可されていません');
      return;
    }

    // 通知する許可がある場合に通知をします
    if (Notification.permission === 'granted') {
      var n = new Notification('Hello');
      return;
    }

    // まだ許可を得ていないので許可を求めます
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }

      if (status === 'granted') {
        var n = new Notification('Hello');
      } else {
        alert('通知機能が許可されていません');
      }
    });
  });
});

