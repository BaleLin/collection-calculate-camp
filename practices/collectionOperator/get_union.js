'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
   let temp = collection_a.concat(collection_b);
   let set = new Set(temp);
   console.log(set);
   return Array.from(set);
}

module.exports = get_union;

