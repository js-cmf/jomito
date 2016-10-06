// collection-controller.js
const Collection = require('../models/collection');

let collectionController = {};

// creating the post on mongo
collectionController.createCollection = (req, res) => {
  let bodyObj = req.body;

  let newCollection = new Collection();
  newCollection.title = bodyObj.title;
  newCollection.properties = bodyObj.body;
  newCollection.user_id = bodyObj.user_id;

  newCollection.save(function(err){
    if (err) throw err;
  });

  res.sendStatus(200);
};

//listing all the posts
collectionController.getAllCollections = (req, res) => {
  Collection.find({}, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.json(result); 
  });
};

// //listing post by id
// collectionController.getCollectionById = (req, res) => {
//   Collection.findById(req.params.post_id, (err, result) => {
//     if (err) return res.status(500).send(err);
//     return res.json(result); 
//   });
// };

// //updating post by id
// collectionController.updateCollectionById = (req, res) => {
//   Collection.findByIdAndUpdate(req.params.post_id, req.body, (err, result) => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).send(result);
//   });
// };

// //deleting post by id
// collectionController.deleteCollectionById = (req, res) => {
//   Collection.findByIdAndRemove(req.params.post_id, (err, result) => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).send('post deleted!');
//   });
// };

module.exports = collectionController;
