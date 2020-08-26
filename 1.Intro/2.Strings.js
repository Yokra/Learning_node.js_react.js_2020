// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";
console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const numberOne1 = "1.10";
const numberTwo2 = "2.30";
/* const result = numberOne1.concat(numberTwo2);
console.log(numberOne, "+", numberTwo, "=", result); */
const combine = (parseFloat(numberOne1) + parseFloat(numberTwo2)).toFixed(2);
console.log(combine);
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

/* const average = (one + two + three) / 3;
console.log(average.toFixed(5)); */

const average = ((one + two + three) / 3).toFixed(5);
console.log(average);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
//const c = letters.lastIndexOf("abc");
const lastLetter = letters.slice(2, 3);
console.log(lastLetter);
/* console.log(letters[2]); */

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";
const replace = fact.replace("javascript", "Javascript");
/* const replace = fact.replace("j", "J"); */
console.log(replace);

// capitalize the J in Javascript

// --------------------------------------
