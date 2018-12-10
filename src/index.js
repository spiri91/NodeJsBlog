require('dotenv').config({ path: '.env.default' });

const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');

const checkError = require('./misc/checkErrorResponse');
const articlesRouter = require('./api/articles/articles');
const subscriber = require('./api/subscriptions/subscribe');


webpush.setVapidDetails(process.env.NOTIFICATIONSUBJECT, process.env.PUBLICVAPIDKEY, process.env.PRIVATEVAPIDKEY);

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(bodyParser.json({ limit: '10mb' }));

app.use('/api/articles', articlesRouter);
app.use(express.static(`${__dirname}/../site/`));
app.use(express.static(`${__dirname}/../dist/`));
app.use(express.static(`${__dirname}/../node_modules/`));

app.post('/api/subscribe', (req, res) => {
    return subscriber.subscribe(req.body, res);
})

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  checkError.checkErrorResponse({ code: err.message }, res);
});

app.listen(port);

module.exports = app;