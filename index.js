var koa = require('koa');
var route = require('koa-route');
var app = koa();

app.use(route.get('/', function *(){
  this.body = {msg: 'hello world'};
}));

app.listen(process.env.PORT || 3000);
