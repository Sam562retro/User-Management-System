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
    // new use
    // let genderBoolean, statusBoolean;
    // if(req.body.gender == 'Male'){
    //     genderBoolean = true;
    // }else{genderBoolean = false;}
    // if(req.body.status == 'Active'){
    //     statusBoolean = true;
    // }else{statusBoolean = false;}
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });
    // save user
    user.save(user).then(data => {
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
    if(!req.body){
        return res.send({
            message: 'data to update cannot be empty'
        })
    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id,req.body).then(data => {if(!data){res.send({message : `There is no user with id ${id}`})}else{res.send(data)}}).catch(err => res.send({message : err.message || 'error updating user data'}));
}

// delete a user with a id
exports.delete = (req, res) => {
    const id = req.params.id;
    userDB.findByIdAndDelete(id).then(data => {if(!data){res.send({message: `There is no user with this id ${id}`})}else{res.send({message : 'user deleted succesfully'})}}).catch(err => {res.send({message : `could'nt delete user with id ${id}`})});
}