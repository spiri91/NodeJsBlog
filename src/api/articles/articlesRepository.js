const mongoose = require('mongoose');
const Article = require('./articleSchema');

exports.getAll = function (callback) {
  Article.find({}, callback);
}

exports.getOne = function (condition, callback) {
  Article.findOne(condition, callback);
}

exports.getArticlesNotVisible = function (callback) {
  Article.find({})
    .select('_id title')
    .where('visible').equals(false)
    .exec(callback);
}

exports.getDTOsWithPagination = function (take, skip, callback) {
  Article.find({})
    .select('_id title smug createdAt description image')
    .where('visible').equals(true)
    .sort({ 'createdAt': -1 })
    .limit(Number(take))
    .skip(Number(skip))
    .exec(callback);
}

exports.incrementClicks = function (article) {
  Article.update({
    _id: article._id
  }, {
    $set: {
      clicks: article.clicks + 1
    }
  }, (err) => {
    if (err) throw err;
  })
}

exports.findAllWith = function (titleQueryPart, callback) {
  Article.find({ title: { $regex: '.*' + titleQueryPart + '.*' } })
    .select('_id title smug createdAt description image')
    .exec(callback);
}

exports.count = function (callback) {
  const { db } = mongoose.connection;

  db.collection('articles').count(callback);
}

exports.put = function (id, obj, callback) {
  Article.findOneAndUpdate({ _id: id }, obj, callback);
}

exports.delete = function (id, callback) {
  Article.findOneAndRemove({ _id: id }, callback);
}

exports.post = function (obj, callback) {
  let article = new Article(obj);

  article.save(callback);
}

exports.postComment = function (articleId, comment, callback) {
  Article.update(
    { _id: articleId },
    { $push: { comments: comment } },
    callback
  );
}