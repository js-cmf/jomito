const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postController = require('./controllers/post-controller');

mongoose.connect('mongodb://jomito:j0m1t0CS@ds049496.mlab.com:49496/jomito', function(err) {
  if (err) return console.error(err);
  console.log('connected to mongoDB @ mlab');
});

app.use('/', express.static(__dirname + '/'));  
// app.use(express.static(__dirname + '/')); 

app.post('/api/post', postController.createPost);

app.listen(3000, function () {
  console.log('JoMiTo listening on port 3000!');
});