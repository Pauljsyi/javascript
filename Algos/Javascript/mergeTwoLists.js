var mergeTwoLists = function (list1, list2) {
  let arr = [],
    result = [];

  for (let i = 0; i < list1.length; i++) {
    arr.push(list1[i]);
    arr.push(list2[i]);
  }

  let index = 0;
  // console.log(index);

  while (arr && index < arr.length - 1) {
    let prev = arr[index],
      next = arr[index + 1];
    console.log("next", next);
    if (prev <= next) {
      result.push(prev);
      index++;
      console.log("second is running");
    } else if (prev > next) {
      console.log("swap", prev, next);
      let temp = prev;
      prev = next;
      next = temp;
      result.push(prev, next);
      index = index + 2;
    }

    // console.log(index);
  }
  return result;
};

console.log(mergeTwoLists([1, 3, 4], [1, 2, 4, 3]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
