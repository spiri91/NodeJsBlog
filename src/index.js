require('dotenv').config({ path: '.env.default' });

const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');
const fs = require('fs')
const https = require('https')
const http = require('http')

const checkError = require('./misc/checkErrorResponse');
const articlesRouter = require('./api/articles/articles');
const subscriber = require('./api/subscriptions/subscribe');

webpush.setVapidDetails(process.env.NOTIFICATIONSUBJECT,
  process.env.PUBLICVAPIDKEY, process.env.PRIVATEVAPIDKEY);

let privateKey = fs.readFileSync('sslCert/server.key', 'utf8');
let certificate = fs.readFileSync('sslCert/server.cert', 'utf8');
let credentials = {
  key: privateKey,
  cert: certificate,
  requestCert: false,
  rejectUnauthorized: false
};

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

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);

httpServer.listen(process.env.HTTP_PORT);
httpsServer.listen(process.env.HTTPS_PORT);

module.exports = app;