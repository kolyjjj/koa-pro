describe('posts api', function(){
  var app = require('../index');
  var request = require('supertest').agent(app.listen());

  it ('should get list of posts', function(done){
     request
        .get('/api/posts')
        .expect('Content-Type', /json/)
        .expect(200, done);
  })
});
