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

  // db.insert('posts', {
  //   title: '甘草',
  //   author: 'Baidu',
  //   content: '甘草，别名：国老、甜草、乌拉尔甘草、甜根子。豆科、甘草属多年生草本，根与根状茎粗壮，是一种补益中草药。对人体很好地一种药，药用部位是根及根茎，药材性状根呈圆柱形，长25~100厘米，直径0.6~3.5厘米。',
  //   thumbnail: '/thumbnail/shaoyao.jpg'
  // }, function(){
  //
  // });
};

exports.down = function(db, callback) {
};
