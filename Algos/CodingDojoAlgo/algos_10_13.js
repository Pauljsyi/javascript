/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
  const quarter = 25;
  const dime = 10;
  const nickel = 5;
  const penny = 1;
  let coin_pouch = {
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  let centsVal = cents;

  console.log("cents???????", Math.floor(centsVal % quarter));

  if (Math.floor(centsVal % quarter) <= 0) {
    coin_pouch.quarter = centsVal / quarter;
    centsVal = centsVal % quarter;
    // console.log("centsVal after getting rid of quarters: ", centsVal);
  }

  if (Math.floor(centsVal % dime <= 0)) {
    coin_pouch.dime = centsVal / dime;
    centsVal = centsVal % dime;
    // console.log("centsVal after getting rid of dimes: ", centsVal);
  }

  if (Math.floor(centsVal % nickel <= 0)) {
    coin_pouch.nickel = centsVal / nickel;
    centsVal = centsVal % nickel;
    // console.log("centsVal after getting rid of nickels: ", centsVal);
  }

  if (Math.floor(centsVal % penny <= 0)) {
    coin_pouch.penny = centsVal / penny;
    centsVal = centsVal % penny;
    // console.log("centsVal after getting rid of pennys: ", centsVal);
  }
  console.log(coin_pouch);
  return coin_pouch;
}

// fewestCoinChange(cents1);
// fewestCoinChange(cents2);
fewestCoinChange(cents3);
// fewestCoinChange(cents4);
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const two_nums1 = [3, 0, 1];
const two_expected1 = 2;

const two_nums2 = [3, 0, 1, 2];
const two_expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const two_nums3 = [2, -4, 0, -3, -2, 1];
const two_expected3 = -1;

const two_nums4 = [5, 2, 7, 8, 4, 9, 3];
const two_expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {}
