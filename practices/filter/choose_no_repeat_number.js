'use strict';

function choose_no_repeat_number(collection) {
  let temp = [];
  return collection.filter(item=>!temp.includes(item)&&temp.push(item));
}

module.exports = choose_no_repeat_number;

