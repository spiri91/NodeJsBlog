const express = require('express');
const status = require('http-status-codes');
const repo = require('./articlesRepository');
const errorChecking = require('../../misc/checkErrorResponse');
const checkAuth = require("../../misc/checkAuth").checkAuth();
const checkError = errorChecking.checkErrorResponse;
const router = express.Router();

const handleResult = function (err, res, statusCode, responseBody, next) {
  if (err.message.indexOf('validation failed') > 0) return checkError({code : 400, message : err.message}, res, next);

  res.status(statusCode);

  return res.send(responseBody);
}

router.get('/', (req, res, next) => {
  repo.getAll((err, results) => handleResult(err, res, status.OK, results, next))
});

router.get('/id/:id', (req, res, next) => {
  repo.getOne({ _id: req.params.id },
    (err, result) => handleResult(err, res, status.OK, result, next))
})

router.get('/smug/:smug', (req, res, next) => {
  repo.getOne({ smug: req.params.smug },
    (err, result) => handleResult(err, res, status.OK, result, next))
})

router.get('/dtos/:take/:skip', (req, res, next) => {
  repo.getDTOsWithPagination(req.params.take, req.params.skip, (err, result) => handleResult(err, res, status.OK, result, next));
})

router.post('/', (req, res, next) => {
  checkAuth(req, next);

  repo.post(req.body, err => handleResult(err, res, status.CREATED, null, next));
})

router.post('/:id/comments', (req, res, next) => {
  repo.postComment(req.params.id, req.body, err => handleResult(err, res, status.CREATED, null, next));
})

router.put('/:id', (req, res, next) => {
  checkAuth(req, next);

  repo.put(req.params.id, req.body, err => handleResult(err, res, status.ACCEPTED, null, next));
});

router.delete('/:id', (req, res, next) => {
  checkAuth(req, next);

  repo.delete(req.params.id, err => handleResult(err, res, status.ACCEPTED, null, next));
});

module.exports = router;