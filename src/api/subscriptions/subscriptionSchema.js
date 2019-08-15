const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.DB_HOST + '/Articles'); //+ "?ssl=true", { auth: { user: process.env.DB_USER, password: process.env.DB_PASSWORD }, ssl: true, useNewUrlParser: true });

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  endpoint: { type: String },
  expirationTime: { type: Date },
  keys: {}
});

let Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;