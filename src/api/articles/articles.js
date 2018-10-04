const express = require('express');
const repo = require('./articlesRepository');

const router = express.Router();

router.get('/', (req, res) => {
  repo.getAll(req);

  res.send("Get all");
});

router.get('/:id', (req, res) => {
  repo.getOne(req.params);

  res.send("get one");
})

router.post('/', (req, res) => {
    
})

router.put('/:id', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;