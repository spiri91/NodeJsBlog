require('dotenv').config({ path: '.env.default' });

const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');
const fs = require('fs')
const https = require('https')

const checkError = require('./misc/checkErrorResponse');
const articlesRouter = require('./api/articles/articles');
const subscriber = require('./api/subscriptions/subscribe');

webpush.setVapidDetails(process.env.NOTIFICATIONSUBJECT,
  process.env.PUBLICVAPIDKEY, process.env.PRIVATEVAPIDKEY);

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(bodyParser.json({ limit: '10mb' }));

app.use('/api/articles', articlesRouter);
app.use(express.static(`${__dirname}/../dist/`));

app.post('/api/subscribe', (req, res) => subscriber.subscribe(req.body, res));
app.get('/', (req, res) => res.sendFile(`${__dirname}/../dist/index.html`));

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  checkError.checkErrorResponse({ code: err.message }, res);
});

app.listen(process.env.PORT);

// https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app).listen(process.env.PORT)

module.exports = app;