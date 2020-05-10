self.addEventListener('push', (event) => {
  if (event.data) {
    console.log('This push event has data: ', event.data.text())
    const title = 'test push';
    const options = {
        body: event.data.text(),
        icon: 'images/node.png'
    }
    const promiseChain = self.registration.showNotification(title, options)
    event.waitUntil(promiseChain)
  } else {
    console.log('This push event has no data.')
  }
})
