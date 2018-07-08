'use strict';

function get_letter_interval_2(number_a, number_b) {
  let temp = [];
  let count = 0;
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
    let num = i;
     var s = '';
       while (num > 0) {
        var m = num % 26
        if (m === 0) m = 26
        s = (m + 9).toString(36) + s
        num = (num - m) / 26
      }
      temp.push(s);
      }
      return temp;
    }
    else if(number_a>number_b){
      for(let i=number_b;i<=number_a;i++){
        let num = i;
         var s = '';
           while (num > 0) {
            var m = num % 26
            if (m === 0) m = 26
            s = (m + 9).toString(36) + s
            num = (num - m) / 26
          }
          temp.push(s);
          }
          return temp.reverse();
    }else{
      let num = number_a;
      var s = '';
        while (num > 0) {
         var m = num % 26
         if (m === 0) m = 26
         s = (m + 9).toString(36) + s
         num = (num - m) / 26
       }
       temp.push(s);
       return temp;
       }
}
module.exports = get_letter_interval_2;

