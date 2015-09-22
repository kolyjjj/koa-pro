var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createCollection('posts', callback);
};

exports.down = function(db, callback) {
  db.dropCollection('posts', callback);
};
