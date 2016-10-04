const Post = require('../models/post');

let postController = {};

postController.createPost = (req, res) => {
  let body = '';
  req.on('data', function(data) {
      body += data;
  });

  req.on('end', function (){
    let bodyObj = JSON.parse(body);

    var newPost = new Post();
    newPost.title = bodyObj.title;
    newPost.body = bodyObj.body;
    newPost.user_id = bodyObj.user_id;

    newPost.save(function(err){
      if (err) throw err;
    });

    res.sendStatus(200);
  });
};

module.exports = postController;
