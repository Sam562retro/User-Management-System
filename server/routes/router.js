const app = require('express').Router();
const controller = require('./../controller/controller');

app.get('/', controller.showAll);

app.get('/add', (req, res) => {
    res.render('add_user');
})

app.get('/update/:id', controller.updateView);

app.post('/api/users', controller.create);

app.get('/api/users', controller.find);

app.post('/api/users/:id', controller.update);

app.get('/api/users/delete/:id', controller.delete);

module.exports = app;