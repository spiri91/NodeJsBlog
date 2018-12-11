const status = require('http-status-codes');
const webpush = require('web-push');
const subscriptionRepo = require('./subscriptionsRepository');

function notifyEveryone(message) {
  subscriptionRepo.getAll((err, subscriptions) => {
    if (err) return;

    for (let s of subscriptions) exports.sendNotification(s, message);
  })
}

exports.subscribe = (subscription, res) => {
  subscriptionRepo.save(subscription, (err, result) => {
    exports.sendNotification(subscription, '{"title":"Thank you","text":"You are awesome!"}');

    exports.notify({ title: 'works', text: 'brilliant' });

    return res.status(status.CREATED).send(null);
  });
}

exports.sendNotification = (subscription, message) => {
  webpush.sendNotification(subscription, message)
    .catch((err) => {
      // if err (410) unsubscribe;
      console.log(err.message);
    })
}

exports.notify = ({ title, text }) => {
  let message = '{"title":"' + title + '","text":"' + text + '"}';

  notifyEveryone(message);
}