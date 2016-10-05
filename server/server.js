const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postController = require('./controllers/post-controller');
const userController = require('./controllers/user-controller');


mongoose.connect('mongodb://jomito:j0m1t0CS@ds049496.mlab.com:49496/jomito', function(err) {
  if (err) return console.error(err);
  console.log('connected to mongoDB @ mlab');
});

// serving static from client folder
app.use(express.static('client'));  

// ** post ** 
// post creation route
app.post('/api/post', postController.createPost);

// ** user **
// user creation route
app.post('/api/user', userController.createUser);


// spinning up the server 
app.listen(3000, function () {
  console.log('JoMiTo listening on port 3000!');
});