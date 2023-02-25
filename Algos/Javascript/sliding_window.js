function findMaxSlidingWindow(nums, w) {
  // Tip: You can use the deque class available
  // your code will replace this placeholder return statement
  let result = [];
  let window = new Deque();

  for (let i = 0; i < w; i++) {
    while (w && nums[i] >= nums[w[-1]]) {
      window.pop();
      window.append(i);
    }
  }
  result.push(nums[window[0]]);

  return result;
}

console.log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(findMaxSlidingWindow([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3));
console.log(findMaxSlidingWindow([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3));
console.log(
  findMaxSlidingWindow(
    [
      1, 5, 8, 10, 10, 10, 12, 14, 15, 19, 19, 19, 17, 14, 13, 12, 12, 12, 14,
      18, 22, 26, 26, 26, 28, 29, 30,
    ],
    3
  )
);
console.log(
  findMaxSlidingWindow(
    [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
    3
  )
);
console.log(findMaxSlidingWindow([4, 5, 6, 1, 2, 3], 3));
