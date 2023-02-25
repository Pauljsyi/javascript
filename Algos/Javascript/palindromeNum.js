/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let isPalindrome = true;
  // edge case
  let numArr = [...(x + "")];
  // iterate through the array and compare opposite sides
  for (let i = 0; i < numArr.length; i++) {
    // create variables for left and right pointers

    const leftPointer = numArr[i],
      rightPointer = numArr[numArr.length - 1 - i];
    // if not match, return false
    if (leftPointer != rightPointer) {
      isPalindrome = false;
    }
  }

  // return true;
  return isPalindrome;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
