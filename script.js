// Task - 2
function calcSumAndAverage(numbers) {
  if (numbers.length === 0) {
    return {
      sum: 0,
      average: 0,
    };
  }

  const sum = numbers.reduce((acc, num) => acc + num);
  const average = sum / numbers.length;

  return {
    sum,
    average,
  };
}
// Examples
let numbers = [10, 20, 30, 50, 60, 70, 80];

let result = calcSumAndAverage(numbers);
console.log(result);

// Task - 3
let names = [
  "Bilal",
  "Khaled",
  "Ahmed",
  "Sayed",
  "Ali",
  "Bilal",
  "Ali",
  "Ahmed",
];

// Examples
const uniqueArray = (array) => {
  return array.filter((ele, index) => array.indexOf(ele) === index);
};

console.log(uniqueArray(names));
