'use strict';

function get_intersection(collection_a, collection_b) {
  let temp = [];
  collection_b.map(item1=>{
    if(collection_a.includes(item1)){
      temp.push(item1);
    }
  });
  return temp;
}

module.exports = get_intersection;
