const mongo = require('mongoose');

const connectDB = ()=>{
    mongo.connect('mongodb://localhost:27017/userManagementSystem', {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : true,
        useCreateIndex : true
    })
    console.log('Connected without errors to mongo DB');
}

module.exports = connectDB;