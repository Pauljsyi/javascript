const palindrome = (str) => {
  let isPalindrome = true;

  let arr = str.replaceAll(" ", "").split("");

  //   console.log(arr);
  // traverse from both sides and meet in the middle

  for (let i = 0; i < arr.length; i++) {
    let rightPointer = arr.length - 1;
    let leftValue = arr[i],
      rightValue = arr[rightPointer - i];

    console.log(leftValue, rightValue);
    if (leftValue === rightValue) {
      rightValue - 1;
      // console.log("this is running", rightValue);
    } else {
      isPalindrome = false;
    }
  }
  // if characters on either sides don't match return false
  // otherwise return true

  return isPalindrome;
};

console.log(palindrome("abba")); // -> true
console.log(palindrome("abcdef")); // -> false
console.log(palindrome("abbbb ba")); // -> true
console.log(palindrome("racecar")); // -> true
