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
        type: Boolean,
        required: true
    },
    status : {
        type: Boolean,
        required: true
    }
});

const userDB = mongo.model('userDB', schema);
module.exports = userDB; 