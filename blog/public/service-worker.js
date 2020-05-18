self.addEventListener('push', (event) => {
  if (event.data) {
    console.log('This push event has data: ', event.data.text())
    const title = 'test push';
    const options = {
        body: event.data.text(),
        icon: 'images/node.png',
        image: 'images/lizi.jpg',
        badge: 'images/node.png',
        timestamp: new Date().getTime(),
        actions: [
          {action: 'like', title: '👍Like'},
          {action: 'reply', title: '⤻ Reply'}
        ]
    }
    const promiseChain = self.registration.showNotification(title, options)
    event.waitUntil(promiseChain)
  } else {
    console.log('This push event has no data.')
  }
})

self.addEventListener('notificationclick', function(event) {
  var messageId = event.notification.data;

  event.notification.close();

  if (event.action === 'like') {
    clients.openWindow("/");
  }
  else if (event.action === 'reply') {
    clients.openWindow("/");
  }
}, false);
