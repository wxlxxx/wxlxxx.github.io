const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const Datastore = require('nedb')
const db = new Datastore()
const bodyParser = require('body-parser')
const webpush = require('web-push')
const vapidKeys = {
  publicKey: 'BATTb8vUedmgZWf8qLgAOcmdzQpRQIOAqAFa0Z7sSgzQV1Flt7a9buS2aPeYiU-WUgehWk4T0F3Nrzekj0qieSA',
  privateKey: 'UMd2eqvNNh6Ad4Q4XBbghDDv__l1leQXjOuq5xO_GK4'
}
webpush.setVapidDetails(
  'mailto: 964397251@qq.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

app.use(cors())
app.use(bodyParser())

app.get('/', (req, res) => res.send('<h1>Hello World!</h1><a href="/push"><a/>'))

app.get('/push', (req, res) => {
  return getSubscriptionsFromDatabase()
  .then((subscriptions) => {
    let promiseChain = Promise.resolve();

    for (let i = 0; i < subscriptions.length; i++) {
      const subscription = subscriptions[i];
      promiseChain = promiseChain.then(() => {
        return triggerPushMsg(subscription, 'data from push');
      })
    }

    return promiseChain;
  })
  .then(() => {
    res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify({ data: { success: true } }))
  })
  .catch((err) => {
    res.status(502)
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
      error: {
        id: 'unable-to-send-messages',
        message: `We were unable to send messages to all subscriptions : ${err.message}`
      }
    }))
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.post('/api/save-subscription/', (req, res) => {
  const isValidSaveRequest = (req, res) => {
    // Check the request body has at least an endpoint.
    if (!req.body || !req.body.endpoint) {
      // Not a valid subscription.
      res.status(400)
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify({
        error: {
          id: 'no-endpoint',
          message: 'Subscription must have an endpoint.'
        }
      }))
      return false
    }
    return true
  }

  if(isValidSaveRequest){
    return saveSubscriptionToDatabase(req.body)
    .then(function(subscriptionId) {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify({ data: { success: true } }))
    })
    .catch(function(err) {
      console.log(err)
      res.status(501)
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify({
        error: {
          id: 'unable-to-save-subscription',
          message: 'The subscription was received but we were unable to save it to our database.'
        }
      }))
    })
  }
})

function saveSubscriptionToDatabase(subscription) {
  return new Promise((resolve, reject) => {
    db.insert(subscription, (err, newDoc) => {
      if (err) {
        reject(err)
        return
      }
      resolve(newDoc._id);
    })
  })
}

function getSubscriptionsFromDatabase() {
  return new Promise((resolve, reject) => {
    db.find({}, (err, docs) => {
      if (err) {
        reject(err)
        return
      }
      resolve(docs)
    })
  })
}

function triggerPushMsg(subscription, dataToSend) {
  return webpush.sendNotification(subscription, dataToSend)
  .catch((err) => {
    if (err.statusCode === 404 || err.statusCode === 410) {
      console.log('Subscription has expired or is no longer valid: ', err)
      return deleteSubscriptionFromDatabase(subscription._id)
    } else {
      throw err
    }
  })
}
