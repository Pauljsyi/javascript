// function hashMap(array) {
//   // create a new array variable
//   let newArr = [];

//   // iterate through the array
//   for (let i = 1; i < array.length; i++) {
//     // create two pointers
//     const firstPointer = array[i - 1],
//       lastPointer = array[i];
//     // if an item is a unique number
//     if (firstPointer !== lastPointer) {
//       // push to new array
//       newArr.push(firstPointer);
//     }
//   }
//   let sum = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     sum += array[i];
//   }

//   //return the sum of unique values
//   return sum;
// }

function hashMap(array) {
  let hashValue = {},
    sum = 0;

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (hashValue[currentValue]) {
      hashValue[currentValue] += 1;
    } else {
      hashValue[currentValue] = 1;
    }

    if (hashValue[currentValue] == 1) {
      sum += currentValue;
    } else if (hashValue[currentValue] == 2) {
      sum -= currentValue;
    }
  }
  return sum;
}

console.log(hashMap([1, 2, 3, 4, 5, 5, 6, 7, 4, 4, 4, 4, 4, 7, 7])); // ==> 10
