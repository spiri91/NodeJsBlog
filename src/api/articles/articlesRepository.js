const Article = require('./articleSchema');

exports.getAll = function (callback) {
  Article.find({}, callback);
}

exports.getOne = function (condition, callback) {
  Article.findOne(condition, callback);
}

exports.getDTOsWithPagination = function (take, skip, callback) {
  Article.find({})
    .select('_id name smug createdAt description')
    .sort('createdAt')
    .limit(Number(take))
    .skip(Number(skip))
    .exec(callback);
}

exports.count = function (callback) {
  Article.count({}, callback);
}

exports.put = function (id, obj, callback) {
  Article.findOneAndUpdate({ _id: id }, obj, callback);
}

exports.delete = function (id, callback) {
  Article.findOneAndRemove({ _id: id }, callback);
}

exports.post = function (obj, callback) {
  let article = Article(obj);

  article.save(callback);
}

exports.postComment = function (articleId, comment, callback) {
  Article.update(
    { _id: articleId },
    { $push: { comments: comment } },
    callback
  );
}