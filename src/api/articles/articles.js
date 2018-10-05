const express = require('express');
const status = require('http-status-codes');
const repo = require('./articlesRepository');
const validArticle = require('./articleFunctions');

const router = express.Router();

router.get('/', (req, res) => {
  let results = repo.getAll();

  res.status(status.OK).send(results);
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let result = repo.getOne(id);

  if (result) res.status(status.OK).send(result);
  else res.status(status.NOT_FOUND).send();
})

router.post('/', (req, res) => {
  let newElement = req.body;
  console.log(newElement);

  if (false === validArticle.isValid(newElement)) res.status(status.BAD_REQUEST).send();

  repo.post(newElement);

  res.status(status.CREATED).send();
})

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let newElement = req.body;

  if (false === validArticle.isValid(newElement)) res.status(status.BAD_REQUEST).send();

  repo.put(id, newElement);

  res.status(status.ACCEPTED).send();
});

router.delete('/:id', (req, res) => {
  let articleToDelete = repo.getOne(req.params.id);

  if (!articleToDelete) res.status(status.NOT_FOUND).send();

  repo.delete(articleToDelete);

  res.status(status.ACCEPTED).send();
});

module.exports = router;