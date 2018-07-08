'use strict';

function get_integer_interval_2(number_a, number_b) {
  let collection = [];
  if(number_a>number_b){
   for(let j=number_a;j>=number_b;j--){
    if(j%2===0){
      collection.push(j);
    }
   }
  }
  else if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
      if(i%2===0){
        collection.push(i);
      }
    }
  }else{
    if(number_a%2===0){
      collection.push(number_a);
    }
  }
  return collection;
}

module.exports = get_integer_interval_2;
