const express = require('express');
const bodyParser = require('body-parser');
const checkError = require('./misc/checkErrorResponse');
require('dotenv').config();

const articlesRouter = require('./api/articles/articles');
const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/articles', articlesRouter);
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  checkError.checkErrorResponse({code : err.message}, res);

  res.status(500);

  res.render('error', { error: err });
});

app.listen(port);

module.exports = app;