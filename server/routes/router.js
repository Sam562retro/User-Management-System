const app = require('express').Router();
const service = require('./../services/render');
const controller = require('./../controller/controller');

app.get('/', service.homeRoutes);

app.get('/update', service.update_user);

app.get('/add', service.add_user);

// api routes
app.post('/api/users', controller.create);

app.get('/api/users', controller.find);

app.post('/api/users/:id', controller.update);

app.delete('/api/users/delete/:id', controller.delete);

module.exports = app;