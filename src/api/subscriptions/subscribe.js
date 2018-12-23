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
  subscriptionRepo.save(subscription, () => {
    res.status(status.CREATED).send(null);
  });
}

exports.sendNotification = (subscription, message) => {
  webpush.sendNotification(subscription, message)
    .catch((err) => {
      if (err.statusCode === 410 || err.statusCode === 404) subscriptionRepo.delete(subscription);

      console.log(err.message);
    })
}

exports.notify = ({ title, text }) => {
  let message = '{"title":"' + title + '","text":"' + text + '"}';

  notifyEveryone(message);
}