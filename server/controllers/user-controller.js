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
    if (err) return handleError(err);
    return res.json(result); 
  });
};

// listing a specific user by id
userController.getUserById = (req, res) => {
  User.findOne({'_id': req.params.user_id}, (err, result) => {
    if (err) return handleError(err);
    return res.json(result); 
  });
};
module.exports = userController;