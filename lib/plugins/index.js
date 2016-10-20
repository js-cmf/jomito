// index.js
// gather components in plugin folder for export
const Collection = require('./collection/containers/Data');
const PostManager = require('./post-manager/containers/Posts');

// import plugin config
const CollectionData = require('./collection/synthesis');
const PostManagerData = require('./post-manager/synthesis');

module.exports = { Collection, CollectionData, PostManager, PostManagerData }
