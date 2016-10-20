// index.js
// gather components in plugin folder for export
const Collection = require('./collection/containers/Data');
const PostManager = require('./post-manager/containers/Posts');

const CollectionData = { name: 'Collection', mount_point: 'dashboard'};
const PostManagerData = { name: 'PostManager', mount_point: 'dashboard'};

module.exports = { Collection, CollectionData, PostManager, PostManagerData }
