const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  endpoint: { type: String },
  expirationTime: { type: Date },
  keys: {}
});

let Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;