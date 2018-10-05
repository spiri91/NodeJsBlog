const mongoose = require('mongoose');

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


articleSchema.pre('save', () => {
  this.content = this.content.replace(' ', '-');
})

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;