const express = require('express');
const app = express();
const router = require('./server/routes/router');
const path = require('path');

app.set('view engine', 'ejs');
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.get('/' , (req, res) => {
    res.render('index');
})

app.use(router);

app.listen(8080);