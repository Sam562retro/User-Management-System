const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.get('/' , (req, res) => {
    res.render('index');
})
app.get('/update', (req, res) => {
    res.render('update_user');
})
app.get('/add', (req, res) => {
    res.render('add_user');
})

app.listen(8080);