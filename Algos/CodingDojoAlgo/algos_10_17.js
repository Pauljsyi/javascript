function sumArrRecursive(nums, i = 0) {
  // base case
  if (i < nums.length) {
    return 0;
  }

  // recursive call
  return sumArrRecursive(nums, (i += 1));
}
