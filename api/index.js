module.exports.all = function *(){
    this.body = 'all';
    };

module.exports.single = function *(){
  this.body = 'single';
};

module.exports.posts = {
  one: function *() {
    this.body = 'one post';
  },
  list: function *(){
    var post = yield this.mongo.db('dev').collection('posts').findOne();
    this.body = {post: post};
  }
};
