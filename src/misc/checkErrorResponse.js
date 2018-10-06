const status = require('http-status-codes');

module.exports.checkErrorResponse = function (err, res) {
  if (!err) return;

  switch (err.code) {
    case 11000:
      res.status(status.BAD_REQUEST);
      return res.send('Duplicate key error collection');

    default:
      res.status(status.INTERNAL_SERVER_ERROR);
      return res.send();
  }
}