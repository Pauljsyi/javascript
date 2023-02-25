// 1. Write code to get array of names from given array of users
//
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];
const names = [];
let foreachUsers = users.forEach((user) => {
  names.push(user.name);
});
console.log(names);

// let mappedUsers = users.map((i) => i.name);

// let mapUsers1 = (array) => {
//   let listOfNames = [];
//   for (let i = 0; i < array.length; i++) {
//     listOfNames.push(array[i].name);
//   }
//   return listOfNames;
// };

// console.log("mapUsers1: ", mapUsers1(users));

// console.log(mappedUsers);

let filteredMap = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(filteredMap);
