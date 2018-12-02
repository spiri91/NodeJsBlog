require('dotenv').config({ path: '.env.default' });

const express = require('express');
const bodyParser = require('body-parser');
const checkError = require('./misc/checkErrorResponse');
const articlesRouter = require('./api/articles/articles');

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(bodyParser.json({ limit: '10mb' }));

app.use('/api/articles', articlesRouter);
app.use(express.static(`${__dirname}/../site/`));
app.use(express.static(`${__dirname}/../dist/`));
app.use(express.static(`${__dirname}/../node_modules/`));

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  checkError.checkErrorResponse({ code: err.message }, res);
});

app.listen(port);

module.exports = app;