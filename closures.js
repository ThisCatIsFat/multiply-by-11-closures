// this programme uses closures and loops to multiply a selection of 10 numbers by eleven in a more efficient way

function multiplyBy(num) {
  return function multiply(num2) {
    console.log(`${num2} * ${num} = ${num2 * num}`);
  };
}

// numbers that get pushed to the function by the loop
let numbers = [2, 5, 7, 3, 10, 22, 13, 9, 19, 35];

// the main number the  other numbers are multiplied by
const eleven = multiplyBy(11);

// loop
for (let i = 0; i < 10; i++) {
  eleven(numbers[i]);
}
