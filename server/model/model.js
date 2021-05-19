const mongo = require('mongoose');

const schema = new mongo.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true
    }
});

const userDB = mongo.model('userDB', schema);
module.exports = userDB; 