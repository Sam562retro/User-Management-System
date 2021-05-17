const app = require('express').Router();

app.get('/' , (req, res) => {
    res.render('index');
})

app.get('/update', (req, res) => {
    res.render('update_user');
})

app.get('/add', (req, res) => {
    res.render('add_user');
})

module.exports = app;