// user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var SALT_WORK_FACTOR = 10;
// var bcrypt = require('bcryptjs');

// userSchema.pre('save', function(next) {
//  var salt = bcrypt.genSaltSync(10);
//  var hash = bcrypt.hashSync(this.password, salt);
//  this.password = hash;
//   next();
// });

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: String,
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  user_type: {type: Array, required: true, default: ['admin']},
  token: String
});

module.exports = mongoose.model('User', userSchema);
