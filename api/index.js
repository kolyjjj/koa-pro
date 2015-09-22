module.exports.all = function *(){
    this.body = 'all';
    };

module.exports.single = function *(){
  this.body = 'single';
};

module.exports.posts = require('./posts.js');
