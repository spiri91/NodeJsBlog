const express = require('express');
const status = require('http-status-codes');
const repo = require('./articlesRepository');
const articleCheck = require('./articleFunctions');
const errorChecking = require('../../misc/checkErrorResponse');
let checkAuth = require("../../misc/checkAuth");
const checkError = errorChecking.checkErrorResponse;
const router = express.Router();

checkAuth = checkAuth.checkAuth();
const handleResult = function (err, res, statusCode, responseBody, next) {
  if (err) return checkError(err, res, next);

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
  repo.getDTOsWithPagination(req.params.take, req.params.skip, (err, result) => {
    handleResult(err, res, status.OK, result, next);
  })
})

router.post('/', (req, res, next) => {
  let newElement = req.body;
  checkAuth(req, next);

  if (false === articleCheck.isValid(newElement)) return res.status(status.BAD_REQUEST).send();

  repo.post(newElement, err => handleResult(err, res, status.CREATED, null, next));
})

router.post('/:id/comments', (req, res, next) => {
  let newComment = req.body;

  if (false === articleCheck.isValidComment(newComment)) return res.status(status.BAD_REQUEST).send();

  repo.postComment(req.params.id, newComment,
    err => handleResult(err, res, status.CREATED, null, next));
})

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  let newElement = req.body;
  checkAuth(req, next);

  repo.put(id, newElement, err => handleResult(err, res, status.ACCEPTED, null, next));
});

router.delete('/:id', (req, res, next) => {
  checkAuth(req, next);

  repo.delete(req.params.id, err => handleResult(err, res, status.ACCEPTED, null, next));
});

module.exports = router;