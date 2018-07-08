'use strict';
var rank_asc = function(collection){
  let temp = collection.sort();
  return temp.reverse();
};

module.exports = rank_asc;
