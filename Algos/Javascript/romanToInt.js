/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arr = s.split("");
  // console.log(arr);
  // iterate through the arr
  for (let i = 0; i < arr.length; i++) {
    // and look up the value associated with roman digit
    const currentVal = arr[i],
      nextVal = arr[i + 1];

    // console.log(currentVal + nextVal);

    if (i + 1 < arr.length && romanObj[currentVal] < romanObj[nextVal]) {
      sum -= romanObj[currentVal];
    } else {
      sum += romanObj[currentVal];
    }

    // add the sum and the value
  }

  // return sum
  return sum;
};

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

console.log(romanToInt("IV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// console.log(1000 - 100 + 1000 - 10 + 100 - 1 + 5);
