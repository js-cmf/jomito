// user-controller.js
const User = require('../models/user');

let userController = {};

userController.createUser = (req, res) => {
  let body = '';
  req.on('data', function(data) {
      body += data;
  });

  req.on('end', function (){
    let bodyObj = JSON.parse(body);

    var newUser = new User();
    newUser.email = bodyObj.email;
    newUser.password = bodyObj.password;
    newUser.name = bodyObj.name;

    newUser.save(function(err){
      if (err) throw err;
    });

    res.sendStatus(200);
  });
};

module.exports = userController;