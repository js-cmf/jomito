const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const dbConfig = require('./db.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const postController = require('./controllers/post-controller');
const userController = require('./controllers/user-controller');
const sessionController = require('./controllers/session-controller');
const cookieController = require('./controllers/cookie-controller');
const collectionController = require('./controllers/collection-controller');
const collectionItemController = require('./controllers/collection-item-controller');

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
app.use((req, res, next) => {
  console.log(Date.now(),req.url);
  console.log(res.get('Content-Type'));
  next();
});
app.use(express.static('client'));

// app.get('/login.html', (req, res) => {
//     res.sendFile(path.join(__dirname + './../client/components/login.html'));
// });
// app.get('/login.js', (req, res) => {
//     res.sendFile(path.join(__dirname + './../client/components/login.js'));
// });
app.get('/dashboard.html', sessionController.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname + './../client/components/dashboard.html'));
});
// ** authentication - authorized routes **
// login
app.post('/login', userController.verifyUser);

// ** post ** 
// post creation route
app.post('/api/post', postController.createPost);

// listing all the posts
app.get('/api/posts', (req, res, next) => {
  console.log('redirect', req.url);
  next();
}, postController.getAllPosts);

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

// ** collection **
// collection creation route
app.post('/api/collection', collectionController.createCollection);
// listing all the collections
app.get('/api/collections', collectionController.getAllCollections);
// deleting a specific collection
app.delete('/api/collection/:collection_id', collectionController.deleteCollectionById);

// ** collection items **
// collection item creation route
app.post('/api/collection_item', collectionItemController.createCollectionItem);
// getting all the collection items
app.get('/api/collection_items', collectionItemController.getAllCollectionItems);
// deleting a specific item
app.delete('/api/collection_item/:item_id', collectionItemController.deleteCollectionItemById);
// delete all items in collection
app.delete('/api/collection_items/:collection_id', collectionItemController.deleteCollectionItemsById);

// spinning up the server 
app.listen(3000, function () {
  console.log('JoMiTo listening on port 3000!');
});