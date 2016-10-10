#!/usr/bin/env node
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
// const dbConfig = require('./server/db.js');
// const mongoose = require('mongoose');
const fs = require('fs');
const progressBar = require('progress');
const request = require('superagent');
// const User = require('./server/models/user');
// const Blog = require('./server/models/blog');

console.log('welcome, hi there, we\'re team synthesis!');

program
  .arguments('<blog>')
  .option('-f, --force-reload', 'force reload your plugin')
  .option('-n, --new-plugin', 'creates a new plugin for synthesis')
  .option('-u, --username <username>', 'set user for plugin')
  .option('-p, --password <password>', 'set password for plugin')  
  .action(function (blog) {
    co(function *() {
      let blogTitle = yield prompt('blog title: ');
      let blogDescription = yield prompt('blog description: ');
      let email = yield prompt('email account: ');
      let password = yield prompt.password('password: ');
      let name = yield prompt('name: ');
      console.log('user: %s and blog %s created!',
        email, blog);
      // //creating the blog
      // let newBlog = {};
      // newBlog.title = blogtTitle;
      // newBlog.description = blogDescription;
      // newBlog.user_id = '1001';  
      // newBlog.blog_id = '101';
      // console.log('after newBlog obj', newBlog);

    //   // creating the user
    //   let newUser = {};
    //   newUser.email = email;
    //   newUser.password = password;
    //   newUser.name = name;
    //   newUser.blog_id = '101';      
    //   console.log('after newUser');
    //   // posting blog to the api
    //   request
    //    .post('http://localhost:3000/api/blog')
    //    .set('Accept', 'application/json')
    //    .send(JSON.stringify(newBlog))       
    //    .end(function (err, res) {
    //      if (err) console.log(err);         
    //      var link = res.body.links.html.href;
    //      console.log('blog created: %s', link);
    //    });

    //   // posting user to the api
    //   request
    //    .post('http://localhost:3000/api/user')
    //    .send(JSON.stringify(newUser))
    //    .set('Accept', 'application/json')
    //    .end(function (err, res) {
    //      if (err) console.log(err);
    //      var link = res.body.links.html.href;
    //      console.log('User created: %s', link);
    //    });
    })
  })
  .parse(process.argv)