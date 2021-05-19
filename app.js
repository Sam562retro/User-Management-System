const express = require('express');
const app = express();
const router = require('./server/routes/router');
const path = require('path');
const connect = require('./server/database/connection');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.use(bodyParser.urlencoded({extended: true}));

connect();

app.use('/', router);

app.listen(8080);