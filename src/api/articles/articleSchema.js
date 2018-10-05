const mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST);

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  smug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  clicks: { type: Number },
  createdAt: Date,
  tags: Array
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;