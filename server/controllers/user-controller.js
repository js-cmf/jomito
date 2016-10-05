// user-controller.js
const User = require('../models/user');

let userController = {};


// create the user on mongoDB
userController.createUser = (req, res) => {

  let bodyObj = req.body;

  let newUser = new User();
  newUser.email = bodyObj.email;
  newUser.password = bodyObj.password;
  newUser.name = bodyObj.name;

  newUser.save(function(err){
    if (err) throw err;
  });

  res.sendStatus(200);
};

// list all users
userController.getAllUsers = (req, res) => {
  User.find({}, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.json(result); 
  });
};

// listing a specific user by id
userController.getUserById = (req, res) => {
  User.findById(req.params.user_id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result) {
      return res.json(result); 
    } else {
      return res.status(500).send("user not found");
    }
  });
};

//updating user by id
userController.updateUserById = (req, res) => {
  User.findByIdAndUpdate(req.params.user_id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
};

//deleting user by id
userController.deleteUserById = (req, res) => {
  User.findByIdAndRemove(req.params.user_id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('post deleted');
  });
};

module.exports = userController;