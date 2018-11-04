const express = require('express');
const status = require('http-status-codes');
const repo = require('./articlesRepository');
const errorChecking = require('../../misc/checkErrorResponse').checkErrorResponse;
const router = express.Router();
const checkAuth = require("../../misc/checkAuth").checkAuth();

const handleResult = function (err, res, statusCode, responseBody, next) {
  if (err && err.message.indexOf('validation failed') > 0) return errorChecking({ code: 400, message: err.message }, res, next);
  if (err && err.message.indexOf('duplicate key') > 0) return errorChecking({ code: 400, message: err.message }, res, next);

  if (err) return errorChecking({ code: 500, message: err.message }, res, next);

  return res.status(statusCode).send(responseBody);
}

router.get('/', (req, res, next) => {
  repo.getAll((err, results) => handleResult(err, res, status.OK, results, next))
})

router.get('/id/:id', (req, res, next) => {
  repo.getOne({ _id: req.params.id },
    (err, result) => handleResult(err, res, status.OK, result, next))
})

router.get('/smug/:smug', (req, res, next) => {
  repo.getOne({ smug: req.params.smug },
    (err, result) => handleResult(err, res, status.OK, result, next))
})

router.get('/dtos/:take/:skip', (req, res, next) => {
  repo.getDTOsWithPagination(req.params.take, req.params.skip,
    (err, result) => handleResult(err, res, status.OK, result, next));
})

router.get('/count', (req, res, next) => {
  repo.count((err, result) => handleResult(err, res, status.OK, { 'count': result }, next));
})

router.post('/', (req, res, next) => { checkAuth(req); repo.post(req.body, err => handleResult(err, res, status.CREATED, null, next)); });

router.post('/:id/comments', (req, res, next) => repo.postComment(req.params.id, req.body,
  err => handleResult(err, res, status.CREATED, null, next)))

router.put('/:id', (req, res, next) => {
  checkAuth(req); repo.put(req.params.id, req.body,
    err => handleResult(err, res, status.ACCEPTED, null, next));
})

router.delete('/:id', (req, res, next) => repo.delete(req.params.id,
  err => handleResult(err, res, status.ACCEPTED, null, next)))

module.exports = router;