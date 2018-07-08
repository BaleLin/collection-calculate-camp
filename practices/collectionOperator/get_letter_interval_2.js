'use strict';

function get_letter_interval_2(number_a, number_b) {
  let temp = [];
  if(number_a<number_b){
    for(let num=number_a;num<=number_b;num++){
      var s = ''
      while (num > 0) {
        var m = num % 26
        if (m === 0) m = 26
        s = (m + 9).toString(36) + s
        num = (num - m) / 26
      }
      temp.push(s);
    }
  }
  console.log(temp);
  return temp;
}

module.exports = get_letter_interval_2;

