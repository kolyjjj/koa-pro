var posts = {
  one: function *() {
    var post = yield this.mongo.db('dev').collection('posts').findOne();
    this.body = {post: post};
  },
  list: function *(){
    var cursor = this.mongo.db('dev').collection('posts').find();
    var posts = yield cursor.toArray();
    this.body = posts;
  }
};

module.exports = posts;
