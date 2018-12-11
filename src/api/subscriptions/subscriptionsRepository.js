const Subscription = require('./subscriptionSchema');

exports.getAll = (callback) => {
  Subscription.find({}, callback);
}

exports.save = (obj, callback) => {
  let subscription = new Subscription({
    endpoint: obj.endpoint,
    exporationTime: obj.exporationTime,
    keys: obj.keys
  })

  subscription.save(callback);
}