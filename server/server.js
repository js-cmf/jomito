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
app.use(bodyParser.json());
app.use(express.static('client'));


// ** post ** 
// post creation route
app.post('/api/post', postController.createPost);

// listing all the posts
app.get('/api/posts', postController.getAllPosts);

// listing a specific post
app.get('/api/post/:post_id', postController.getPostById);

// updating a specific post
app.put('/api/post/:post_id', postController.updatePostById);

// ** user **
// user creation route
app.post('/api/user', userController.createUser);

// listing all the users
app.get('/api/users', userController.getAllUsers);

// listing all the users
app.get('/api/user/:user_id', userController.getUserById);

// updating a specific user
app.put('/api/user/:user_id', userController.updateUserById);


// spinning up the server 
app.listen(3000, function () {
  console.log('JoMiTo listening on port 3000!');
});