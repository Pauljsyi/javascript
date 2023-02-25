function monotonicArray(array) {
  let isPositive = true,
    isNegative = true;

  let index = 0;
  while (index < array.length) {
    const current = array[index],
      lastVal = array[index - 1];

    if (current > lastVal) {
      isPositive = false;
    }

    if (current < lastVal) {
      isNegative = false;
    }

    index++;
  }
  return isPositive || isNegative;
}

console.log(monotonicArray([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])); // -> true
console.log(monotonicArray([-1, -5, -10, -1100, -1100, -1101, -1102, 9001])); // -> false
console.log(monotonicArray([-1, -5, -10, -1100, -900, -1101, -1102, -9001])); // -> false
console.log(monotonicArray([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11])); // -> false
console.log(monotonicArray([-1, -1, -1, -1, -1, -1, -1, -1])); // -> true
console.log(monotonicArray([7, 5, 3, 1])); // -> true
console.log(monotonicArray([4, 0, 3, 1])); // -> false
console.log(monotonicArray([5, 4, 3])); // -> true
