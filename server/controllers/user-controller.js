// user-controller.js
const User = require('../models/user');

let userController = {};

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

module.exports = userController;