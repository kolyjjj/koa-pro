var koa = require('koa');
var route = require('koa-route');
var staticServe = require('koa-static');
var app = koa();

app.use(staticServe(__dirname + '/static'));

app.use(route.get('/api/', function *(){
  this.body = {msg: 'hello world'};
}));

app.listen(process.env.PORT || 3000);
