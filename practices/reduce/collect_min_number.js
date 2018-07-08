'use strict';

function collect_min_number(collection) {
  return collection.reduce((x,y)=>{
    return x<y?x:y;
  });
}

module.exports = collect_min_number;

