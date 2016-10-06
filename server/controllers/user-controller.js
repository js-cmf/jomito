const User = require('../models/user');
const cookieController = require('./cookie-controller');
const bcrypt = require('bcrypt');


let userController = {};


// create the user on mongoDB
userController.createUser = (req, res) => {
  console.log(req.body);

  let bodyObj = req.body;

  let newUser = new User();
  newUser.email = bodyObj.email;
  newUser.password = bodyObj.password;
  newUser.name = bodyObj.name;

  newUser.save(function(err){
    if (err) throw err;
  });

  res.status(200).send('user created');
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

//verify user's credentials
userController.verifyUser = (req, res) => {
  User.findOne({email: req.body.email}, (err,user) => {
    if (err) return res.status(500).send(err);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        console.log("you're right!");
        cookieController.setSSIDCookie(req, res, user._id);
        // res.redirect('/secret');
        res.redirect(301, '/dashboard.html');
        // return res.status(200).send('sucess!!!'); 
      }      
      else {
        console.log('acess denied');
        res.redirect(301, '/components/signup.html');
      }
    } else {
      return res.status(500).send("user not found");
    }     
  });
;}

module.exports = userController;