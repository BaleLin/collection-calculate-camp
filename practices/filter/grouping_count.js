'use strict';

function grouping_count(collection) {
  let obj = {};
  collection.filter(item=>{
    if(obj.hasOwnProperty(item)){
      obj[item]++;
    }else{
      obj[item] = 1;
    }
  });
  return obj;
}

module.exports = grouping_count;
