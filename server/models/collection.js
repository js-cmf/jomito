// collection.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  title: {type: String, required: true},
  properties: {type: String, required: true},
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  user_id: {type: String, required: true}
});

module.exports = mongoose.model('Collection', collectionSchema);