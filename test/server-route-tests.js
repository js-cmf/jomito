const request = require('supertest');
const expect = require('chai').expect;

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`

require('../server/server.js');

describe('Server route', function() {
  describe('GET /', function() {
    it('should respond with html', function(done) {
      request(HOST)
        .get('/')
        .expect('Content-Type', /html/,done)
    });

    it('should respond with a 200 status', function(done) {
      request(HOST)
        .get('/')
        .expect(200, done);
    });
  });

  // describe('GET /user/:username/:password', function() {
  //   it('should respond with nothing when username and password are not found in the database', function(done) {
  //     request(HOST)
  //       .get('/user/thisshouldnot/beauser')
  //       .expect(response => {
  //         expect(response.text).to.equal('');
  //       })
  //       .expect(200, done);
  //   });

  //   it('should respond with JSON object with properties "activities" and "user" if username and password are found in the database', function(done) {
  //     request(HOST)
  //       .get('/user/hithere/hithere')
  //       .expect('Content-Type', 'application/json; charset=utf-8')
  //       .expect(response => {
  //         expect(response.body).to.have.property('activities');
  //         expect(response.body).to.have.property('user');
  //       })
  //       .expect(200, done);
  //   });
  // });

  // describe('GET /userinfo/:username', function() {
  //   it('should respond with status 500 and no data if the username does not match a database record', function(done) {
  //     request(HOST)
  //       .get('/userinfo/unexistentuser')
  //       .expect(500, done);        
  //   });

  //   it('should respond with a JSON object with properties "username", "profilepic", and "bio" if the username matches a database record', function(done) {
  //     request(HOST)
  //       .get('/userinfo/joe')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .expect(function(res) {
  //         expect(res.body).to.have.property('username');
  //         expect(res.body).to.have.property('profilepic');
  //         expect(res.body).to.have.property('bio');                    
  //       })
  //       .expect(200, done);   
  //   });
  // });
});
