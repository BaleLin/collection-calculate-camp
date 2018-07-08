'use strict';

function collect_all_even(collection) {
  let collection_soon =[];
  collection.map(item=>{
    if(item%2==0){
      collection_soon.push(item);
    }
  });
  return collection_soon;
}

module.exports = collect_all_even;
