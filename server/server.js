const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://jomito:j0m1t0CS@ds049496.mlab.com:49496/jomito', function(err) {
  if (err) return console.error(err);
  console.log('connected to mongoDB @ mlab');
});

app.use('/', express.static(__dirname + './client/index.html'));  
// app.use(express.static(__dirname + '/')); 

app.post('/api/post', (req, res) => {
  let body = '';
  req.on('data', function(data) {
      body += data;
  });

  req.on('end', function (){
    let bodyObj = JSON.parse(body);

    var newDog = new Dog();
    newDog.name = bodyObj.name;
    newDog.number_of_legs = bodyObj.number_of_legs;
    newDog.species = bodyObj.species;
    newDog.trained = bodyObj.trained;
    newDog.birthday = bodyObj.birthday;

    newDog.save(function(err){
      if (err) throw err;
    });

    res.sendStatus(200);
  });

});

app.listen(3000, function () {
  console.log('JoMiTo listening on port 3000!');
});