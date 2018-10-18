const express = require('express');
const bodyParser = require('body-parser');
const checkError = require('./misc/checkErrorResponse');
const path = require('path');

require('dotenv').config();

const articlesRouter = require('./api/articles/articles');
const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/articles', articlesRouter);

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  checkError.checkErrorResponse({code : err.message}, res);
});

app.get('/', (req, res) => res.sendFile(path.resolve(`${__dirname}/../site/index.html`)));

app.listen(port);

module.exports = app;