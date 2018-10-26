const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true, unique: true },
  smug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now() },
  comments: [{
    by: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now() }
  }]
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;