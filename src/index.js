const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const articlesRouter = require('./api/articles/articles');
const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  res.status(500);

  res.render('error', { error: err });
});

app.use('/api/articles', articlesRouter);
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));


app.listen(port);

module.exports = app;