/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello    world     ";
const expected2 = "hello    world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
  return str.trim();
}

// console.log(trim(str1));
// console.log(trim(str2));
/*****************************************************************************/

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
  let news1 = s1.toLowerCase();
  let news2 = s2.toLowerCase();
  // edge cases
  // strings must be same length
  if (news1.length != news2.length) {
    return false;
  }

  // create a hashmap object
  let hashValues = {};

  // iterate through the first string
  for (let i = 0; i < news1.length; i++) {
    // place each character as keys and the number 0 as values for now
    hashValues[news1[i]] = 0;
  }

  for (let i = 0; i < news2.length; i++) {
    // compare the keys and characters of the second string
    if (hashValues[news2[i]] < 0) {
      return false;
    } else {
      hashValues[news2[i]] += 1;
    }
    // if there is a match we will change the value to 1
    // if every key has a value of 1, we will return true
  }
  console.log(hashValues);
  // otherwise, return true
  return true;
}

console.log(isAnagram(two_strA1, two_strB1));
console.log(isAnagram(two_strA2, two_strB2));
console.log(isAnagram(two_strA3, two_strB3));
console.log(isAnagram(two_strA4, two_strB4));

// const two_strA1 = "yes";
// const two_strB1 = "eys";
// const two_expected1 = true;

// const two_strA2 = "yes";
// const two_strB2 = "eYs";
// const two_expected2 = true;

// const two_strA3 = "no";
// const two_strB3 = "noo";
// const two_expected3 = false;

// const two_strA4 = "silent";
// const two_strB4 = "listen";
// const two_expected4 = true;
