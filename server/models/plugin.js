// collection.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pluginSchema = new Schema({
  name: {type: String, required: true},
  mount_point: {type: String, required: true},  
  plugin_properties: { type: Array, required: true },
});

module.exports = mongoose.model('Plugin', pluginSchema);