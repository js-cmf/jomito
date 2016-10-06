const express = require('express');
const app = express();
const fs = require('fs');
const dbConfig = require('./db.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const postController = require('./controllers/post-controller');
const userController = require('./controllers/user-controller');
const sessionController = require('./controllers/session-controller');
const cookieController = require('./controllers/cookie-controller');

//connecting to the database
mongoose.connect(dbConfig.url, function(err) {
  if (err) return console.error(err);
  console.log('connected to mongoDB @ mlab');
});

// handling cookies for all requests
app.use(cookieParser());
//using bodyParser for json
app.use(bodyParser.json());
// serving static from client folder
app.use(express.static('client'));


// ** authentication - authorized routes **
// login
app.post('/login', userController.verifyUser);

// ** post ** 
// post creation route
app.post('/api/post', postController.createPost);

// listing all the posts
app.get('/api/posts', postController.getAllPosts);

// listing a specific post
app.get('/api/post/:post_id', postController.getPostById);

// updating a specific post
app.put('/api/post/:post_id', postController.updatePostById);

// deleting a specific post
app.delete('/api/post/:post_id', postController.deletePostById);


// ** user **
// user creation route
app.post('/api/user', userController.createUser);

// listing all the users
app.get('/api/users', userController.getAllUsers);

// listing all the users
app.get('/api/user/:user_id', userController.getUserById);

// updating a specific user
app.put('/api/user/:user_id', userController.updateUserById);

// deleting a specific user
app.delete('/api/user/:user_id', userController.deleteUserById);

// spinning up the server 
app.listen(3000, function () {
  console.log('JoMiTo listening on port 3000!');
});