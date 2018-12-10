const status = require('http-status-codes');
const webpush = require('web-push');

exports.subscribe = (subscription, res) => {
    exports.sendNotification(subscription, '{"title":"Thank you","text":"You are awesome!"}');

    return res.status(status.CREATED).send(null);
}

exports.sendNotification = (subscription, message) => {
    webpush.sendNotification(subscription, message)
        .catch(err => console.log(err.message));
}