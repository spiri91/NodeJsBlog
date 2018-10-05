const Article = require('./articleSchema');

exports.getAll = function (callback) {
  Article.find({}, callback);
}

exports.getOne = function (condition, callback) {
  Article.findOne(condition, callback);
}

exports.put = function (obj) {
  console.log(`put ${obj}`);
}

exports.delete = function (obj) {
  console.log(`delete ${obj}`);
}

exports.post = function (obj, callback) {
  let article = Article(obj);

  article.save(callback);
}
