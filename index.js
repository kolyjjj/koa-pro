var koa = require('koa');
var route = require('koa-route');
var staticServe = require('koa-static');
var mongo = require('koa-mongo');
var assert = require('assert');
var url = 'mongodb://localhost:10087/test';

var app = koa();

app.use(mongo({
  uri: 'mongodb://localhost:10087/dev',
  max: 100,
  min: 1,
  timeout: 30000,
  log: false
}));

app.use(staticServe(__dirname + '/static'));

app.use(route.get('/api/', function *(){
  this.body = yield this.mongo.db('dev').collection('users').findOne();
}));

app.listen(process.env.PORT || 3000);
