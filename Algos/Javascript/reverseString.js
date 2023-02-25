const revString = (str) => {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  console.log(reversed);
};

revString("apple");
revString("greetings!");
