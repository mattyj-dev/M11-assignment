//STEP 1 Create an application that prompts the user for their name. Then, find the length of characters in the person’s name. Use the alert method to display the result.

// const userName = prompt("Please enter your name:");
// const nameLength = userName.length;
// alert("Your name contains " + nameLength + " characters.");


//STEP 2 Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

// const userName = prompt("Please enter your name:");
// const userNumber = parseInt(prompt("Please enter a numeric value to find the letter in your name:"));
// if (isNaN(userNumber)) {
//     alert("You entered an invalid numeric value.");
// } else {
//     if (userNumber >= 1 && userNumber <= userName.length) {
//         const letter = userName.charAt(userNumber - 1); // Adjust for 0-based indexing
//         alert("The letter at position " + userNumber + " in your name is: " + letter);
//     } else {
//         alert("The numeric value is out of range. Please enter a value between 1 and " + userName.length + ".");
//     }
// }


//STEP 3 Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

// const firstName = prompt("Please enter your first name:");
// const lastName = prompt("Please enter your last name:");
// const fullName = "Your name is: " + firstName + " " + lastName;
// alert(fullName);


//STEP 4 Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

// const text = "The quick brown fox jumps over the lazy dog";
// const index = text.indexOf("fox");
// if (index !== -1) {
//     alert("The index of the word 'fox' is: " + index);
// } else {
//     alert("The word 'fox' is not found in the text.");
// }


//STEP 5 Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

// const text = "The quick brown fox jumps over the lazy fox";
// const lastIndex = text.lastIndexOf("fox");
// if (lastIndex !== -1) {
//     alert("The index of the last instance of the word 'fox' is: " + lastIndex);
// } else {
//     alert("The word 'fox' is not found in the text.");
// }


//STEP 6 Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

// let text = "The quick brown fox jumped over the lazy dog";
// const fullName = prompt("Please enter your full name:");
// text = text.replace("the lazy dog", fullName);
// alert("The updated text is: " + text);


//STEP 7 Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

// const text = "The quick brown fox jumps over the lazy dog";
// const searchWord = prompt("Please enter a word to search within the text:");
// const index = text.indexOf(searchWord);
// if (index !== -1) {
//     alert("The word '" + searchWord + "' was found at index: " + index);
// } else {
//     alert("The word '" + searchWord + "' was not found in the text.");
// }


//STEP 8 Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.

// const old_string = "The quick brown fox jumps over the lazy dog";
// const start = old_string.indexOf("the");
// const end = old_string.indexOf("dog") + 7; // Include the word "dog" and the following space
// const new_string = old_string.substring(start, end);
// const uppercase_new_string = new_string.toUpperCase();
// alert(uppercase_new_string);


//STEP 9 Create an application that stores the text “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

// let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// text = text.trim();
// const lowercaseText = text.toLowerCase();
// alert(lowercaseText);


//STEP 10 Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

// const text = "the quick brown fox jumps over the lazy dog";
// const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
// alert(capitalizedText);