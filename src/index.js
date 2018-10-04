const express = require('express');
require('dotenv').config();

const articlesRouter = require('./api/articles/articles');
const port = process.env.PORT;
const app = express();


app.use('/api/articles', articlesRouter);
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port)