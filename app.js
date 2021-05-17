const express = require('express');
const app = express();
const router = require('./server/routes/router');
const path = require('path');
const connect = require('./server/database/connection');

app.set('view engine', 'ejs');
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

connect();

app.use('/',router);

app.listen(8080);