const userDB = require('./../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.send({
            message: 'content cannot be empty'
        })
        return
    }
    let genderBoolean, statusBoolean;
    genderBoolean = req.body.gender === 'Male';
    statusBoolean = req.body.status === 'Active';
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: genderBoolean,
        status: statusBoolean
    });
    // save user
    user.save().then(data => {
        res.redirect('/add')
    }).catch(err => {
        res.send({message: err.message || 'Some error occoured while adding user to database'})
    })
}
// retrieve and return all users
exports.find = (req, res) => {
    userDB.find().then(users => { res.send(users)}).catch(err => {res.send({message: err.message || 'Some error occoured while retrieving users from database'})})
}


//update a new user by user id
exports.update = (req,res) => {
    if (!req.body) {
        return res.send({
            message: 'data to update cannot be empty'
        })
    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body).then(data => {
        if (!data) {
            res.send({message: `There is no user with id ${id}`})
        } else {
            res.redirect('/')
        }
    }).catch(err => res.send({message: err.message || 'error updating user data'}));
}

// delete a user with a id
exports.delete = (req, res) => {
    const id = req.params.id;
    userDB.findByIdAndDelete(id).then(data => {if(!data){res.send({message: `There is no user with this id ${id}`})}else{res.send({message : 'user deleted succesfully'})}}).catch(err => {res.send({message : `could'nt delete user with id ${id}`})});
}