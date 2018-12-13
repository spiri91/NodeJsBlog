import call from './call';

const applicationServerPublicKey = 'BGFOniM4v86AqO9iTo4vSkL3uKwgBiStcju3h6BGBwbLtfl2BcWVHZErfY6-tDTUrflK3yxuaGGY5g8YBwbtshE';

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function updateSubscriptionOnServer(subscription) {
  await call.subscribeUser(subscription);
}

function subscribeUser(sw) {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey
  }).then((subscription) => {
    console.log('User is subscribed');

    updateSubscriptionOnServer(subscription);
  }).catch((err) => {
    console.log('Failed to subscribe the user: ', err);
  });
}

function unsubscribeUser(sw) {
  sw.pushManager.getSubscription()
    .then((subscription) => {
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch((error) => {
      console.log('Error unsubscribing', error);
    })
    .then(() => {
      // updateSubscriptionOnServer(null);

      console.log('User is unsubscribed.');
    });
}

function init(sw) {
  sw.pushManager.getSubscription()
    .then((subscription) => {
      let isSubscribed = !(subscription === null);

      if (isSubscribed) {
        console.log('User IS subscribed.');
      } else {
        Notification.requestPermission().then((accept) => {
          if (accept === 'granted') subscribeUser(sw);
        });
      }
    })
}

export default {
  init
}