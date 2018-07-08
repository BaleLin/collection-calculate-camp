'use strict';

function get_integer_interval(number_a, number_b) {
  let collection = [];
  if(number_a<number_b){
    for(let step1=number_a; step1<=number_b;step1++){
      collection.push(step1);
    }
    }else if(number_a>number_b){
      for(let step2=number_a; step2>=number_b;step2--){
        collection.push(step2);
      }
    }else{
      collection.push(number_a);
    }
    return collection;
}

module.exports = get_integer_interval;

