/**
 * @param {string[]} strs
 * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   // create a prefix variable
//   let compareFirst = strs[0];
//   let prefix = "";
//   // iterate through the array
//   for (let i = 1; i < strs.length; i++) {
//     // iterate through the string

//     // console.log(prefix);
//     for (let j = 0; j < strs[i].length; j++) {
//       // and compare character from current string with the next string
//       // console.log(compareFirst[j], strs[i][j]);
//       if (compareFirst[j] === strs[i][j]) {
//         prefix += strs[i][j];
//       } else {
//         break;
//       }
//       // if it's a match, add it to the result variable
//     }
//   }
//   // console.log(prefix);
//   return prefix;
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (arr) {
  let i = 1;
  let prf = arr[0];
  while (i < arr.length) {
    if (!arr[i].startsWith(prf)) {
      prf = prf.slice(0, -1);
      console.log(prf);
    } else {
      i++;
    }
  }
  return prf;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
