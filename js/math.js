//STEP 1 Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

// let userInput = prompt("Enter a number:");
// let number = parseFloat(userInput);
// if (number < 0) {
//     // If the number is negative, convert it to positive equivalent
//     number = Math.abs(number);
// }
// console.log("Positive version of the number:", number);


//STEP 2 Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

// let userInput = prompt("Enter a floating point value:");
// let floatValue = parseFloat(userInput);
// let roundedValue = Math.ceil(floatValue);
// console.log("Rounded up value:", roundedValue);


//STEP 3 Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

// let userInput = prompt("Enter a floating point value:");
// let floatValue = parseFloat(userInput);
// let roundedValue = Math.floor(floatValue);
// console.log("Rounded down value:", roundedValue);


//STEP 4 Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.

// let input = prompt("Enter 5 numbers separated by commas (e.g., 1,2,3,4,5):");
// let numbers = input.split(",").map(Number);
// let largest = Math.max(...numbers);
// let smallest = Math.min(...numbers);
// console.log("Largest number:", largest);
// console.log("Smallest number:", smallest);


//STEP 5 Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.

// let userInput = prompt("Enter a number:");
// let number = parseFloat(userInput);
// let squareRoot = Math.sqrt(number);
// console.log("Square root:", squareRoot);