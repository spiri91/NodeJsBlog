const Article = require('./articleSchema');

function callback(err, res) {
  if (err) throw err;

  return res;
}

exports.getAll = function () {
  Article.find({}, callback);
}

exports.getOne = function (condition) {
  Article.findOne(condition, callback);
}

exports.put = function (obj) {
  console.log(`put ${obj}`);
}

exports.delete = function (obj) {
  console.log(`delete ${obj}`);
}

exports.post = function (obj) {
  let article = Article(obj);

  article.save(callback);
}
