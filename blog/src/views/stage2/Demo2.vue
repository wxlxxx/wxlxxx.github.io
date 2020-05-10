<template>
  <div>
    <h2 class="mb-4">{{currRoute.name}}</h2>
    <div>
      <label>get publicKey: <a href="https://web-push-codelab.glitch.me/" target="_blank">https://web-push-codelab.glitch.me</a></label>
      <input :class="textError ? 'form-control border-danger' : 'form-control'" type="text" v-model="publicKey"/>
    </div>
    <div class="py-4"><button class="btn btn-primary px-5" @click="main()">Go</button></div>
    <textarea class="form-control">{{pushSubscription}}</textarea>
    <p>参考：</p>
    <a href="https://developers.google.com/web/fundamentals/push-notifications/display-a-notification">https://developers.google.com/web/fundamentals/push-notifications/display-a-notification</a>
  </div>
</template>

<script>
export default {
	name: 'Demo2',
	data(){
		return {
			currRoute: null,

      publicKey: '',
      textError: false,
      pushSubscription: null
		}
	},
	created(){
		this.currRoute = this.$route

	},
	methods: {
    main(){
      if(!this.publicKey){
        this.textError = true
        return
      }

      if (!('serviceWorker' in navigator)) {
        // Service Worker isn't supported on this browser, disable or hide UI.
        return
      }

      if (!('PushManager' in window)) {
        // Push isn't supported on this browser, disable or hide UI.
        return
      }

      this.registerServiceWorker()
    },

    registerServiceWorker() {
      return navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service worker successfully registered.')
        this.askPermission()
        .then(result => {
          console.log(result)
          this.subscribeUserToPush(registration)
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch((err) => {
        console.error('Unable to register service worker.', err)
      })
    },

    subscribeUserToPush(registration){
        const subscribeOptions = {
          userVisibleOnly: true,
          // https://web-push-codelab.glitch.me/
          applicationServerKey: this.urlBase64ToUint8Array(this.publicKey)
        }
        return registration.pushManager.subscribe(subscribeOptions)
        .then((pushSubscription) => {
          this.pushSubscription = JSON.stringify(pushSubscription)
          console.log(pushSubscription)
          console.log('Received PushSubscription: ', JSON.stringify(pushSubscription))
          // Send a Subscription to Your Server
          // this.sendSubscriptionToBackEnd(pushSubscription)
        })
        .catch(error => {
          console.log(error)
        })
    },

    askPermission(){
      return new Promise((resolve, reject) => {
        // 针对回掉的方式
        const permissionResult = Notification.requestPermission((result) => {
          resolve(result);
        });
        // 针对Promise的方式
        if (permissionResult) {
          permissionResult.then(resolve, reject);
        }
      })
      .then((permissionResult) => {
        if (permissionResult !== 'granted') {
          throw new Error('We weren\'t granted permission.');
        }
      });
    },

    // https://github.com/GoogleChromeLabs/web-push-codelab/blob/master/app/scripts/main.js
    urlBase64ToUint8Array(base64String){
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },

    sendSubscriptionToBackEnd(subscription) {
      return fetch('http://localhost:3000/api/save-subscription/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscription)
      })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Bad status code from server.')
        }

        return response.json()
      })
      .then(function(responseData) {
        if (!(responseData.data && responseData.data.success)) {
          throw new Error('Bad response from server.')
        }
      })
    }
	}
}
</script>
