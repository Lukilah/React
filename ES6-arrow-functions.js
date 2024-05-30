var numbers = [3, 56, 2, 48, 5];

//using the map function
const newNumbers = numbers.map((x) => x * 2);
// console.log(newNumbers);

//filter function
const newNumbers = numbers.filter((x) => x < 10);

//reduce function
const newNumbers = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

//find the first value
const newNumber = numbers.find((num) => num > 10);

//find a specific index
const findIndex = numbers.findIndex((x) => x > 10);
