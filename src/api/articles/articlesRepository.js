const mongoose = require('mongoose');
const Article = require('./articleSchema');

exports.getAll = function (callback) {
  Article.find({}, callback);
}

exports.getOne = function (condition, callback) {
  Article.findOne(condition, callback);
}

exports.getDTOsWithPagination = function (take, skip, callback) {
  Article.find({})
    .select('_id title smug createdAt description')
    .where('visible').equals(true)
    .sort({ 'createdAt': -1 })
    .limit(Number(take))
    .skip(Number(skip))
    .exec(callback);
}

exports.findAllWith = function (titleQueryPart, callback) {
  Article.find({ title: { $regex: '.*' + titleQueryPart + '.*' } })
    .select('_id title smug createdAt description')
    .exec(callback);
}

exports.count = function (callback) {
  const { db } = mongoose.connection;

  db.collection('articles').countDocuments(callback);
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