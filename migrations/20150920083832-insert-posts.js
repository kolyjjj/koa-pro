var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.insert('posts', {
    title: '白芍药',
    author: 'koly',
    content: '白芍药，也称白花芍药，是毛莨科芍药属植物。在我国有悠久的栽培历史，驰名中外，其称百花芍药。其根可入药。多年生草本或亚灌木，生于山坡、山谷的灌木丛或草丛中。我国大部分地区均有栽植。',
    thumbnail: '/thumbnail/shaoyao.jpg'
  }, function(){

  });
};

exports.down = function(db, callback) {
};
