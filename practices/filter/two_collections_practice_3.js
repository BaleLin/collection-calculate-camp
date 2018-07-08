'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let temp = [];
  return collection_a.filter(item1=>{
    collection_b.filter(item2=>{
      item1%item2===0
    });
  });
 
}

module.exports = choose_divisible_integer;
