const Session = require('../models/session');

var sessionController = {};

sessionController.startSession = function(cookieId, callback) {
  console.log('saving github token in mongo', cookieId);
  var session = new Session();
  session.cookieId = cookieId;
  session.save(function(err){
      if (err) throw err;
    })
};

module.exports = sessionController;