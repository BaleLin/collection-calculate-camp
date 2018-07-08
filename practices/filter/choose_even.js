'use strict';

function choose_even(collection) {
 return collection.filter(items=>
     items%2===0);
 }

module.exports = choose_even;
