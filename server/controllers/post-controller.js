const Post = require('../models/post');

let postController = {};

// creating the post on mongo
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

//listing all the posts
postController.getAllPosts = (req, res) => {
  Post.find({}, (err, result) => {
    if (err) return handleError(err);
    return res.json(result); 
  });
};

//listing post by id
postController.getPostById = (req, res) => {
  Post.findOne({'_id': req.params.post_id}, (err, result) => {
    if (err) return handleError(err);
    return res.json(result); 
  });
};

module.exports = postController;
