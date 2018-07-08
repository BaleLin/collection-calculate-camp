'use strict';
var number_map_to_word = function(collection){
  return  collection.map(items=>String.fromCharCode(items));
};

module.exports = number_map_to_word;
