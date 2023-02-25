/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  for (let i = 0; i < s.length; i++) {}
  // return true;
};

console.log(isValid("()")); // -> true
console.log(isValid("()[]{}")); // -> true
console.log(isValid("(]")); // -> false
console.log(isValid("[]]")); // -> false
console.log(isValid("(]")); // -> false
