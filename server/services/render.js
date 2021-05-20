const axios = require('axios');

// home routes
exports.homeRoutes = (req, res) => {
    // make a get request to /api/users
    axios.get('http://localhost:8080/api/users').then(response => {
        res.render('index', {users: response.data});
    }).catch(err => {
        res.send(err);
    });
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:8080/api/users').then(response => {
        var id = req.query.id;
        for (let i = 0; i <= response.data.length; i++) {
            let idData = response.data[i]._id;
            if (idData === id) {
                res.render('update_user', {user: response.data[i]});
            }
        }
    }).catch(err => {
        res.send(err);
    });
}