//STEP 1 Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

// Sample Data and Output
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

// function sortStringAlphabetically(inputString) {
//     return inputString.split('').sort().join('');
// }

// let exampleString = 'webmaster';
// let sortedString = sortStringAlphabetically(exampleString);
// console.log("Sorted string:", sortedString); // Output: 'abeemrstw'


//STEP 2 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.

// Sample Data and Output
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'

// function capitalizeFirstLetterOfEachWord(inputString) {
//     let words = inputString.split(' ');

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     return words.join(' ');
// }

// let exampleString = 'the quick brown fox';
// let capitalizedString = capitalizeFirstLetterOfEachWord(exampleString);
// console.log("Capitalized string:", capitalizedString); // Output: 'The Quick Brown Fox'


//STEP 3 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// Sample Data and Output
// Example string: 'The quick brown fox'
// Expected Output: 5

// function countVowels(inputString) {
//     let lowerCaseString = inputString.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     for (let i = 0; i < lowerCaseString.length; i++) {
//         // Check if the current character is a vowel
//         if (vowels.includes(lowerCaseString[i])) {
//             vowelCount++;
//         }
//     }

//     return vowelCount;
// }

// let exampleString = 'The quick brown fox';
// let numVowels = countVowels(exampleString);
// console.log("Number of vowels:", numVowels); // Output: 5


//STEP 4 Write a JavaScript function that generates a string id (specified length) of random characters.

// Sample Data and Output
// Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

// function generateRandomString(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let randomString = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         randomString += characters.charAt(randomIndex);
//     }

//     return randomString;
// }

// const idLength = 8; // Specify the desired length of the ID
// const randomID = generateRandomString(idLength);
// console.log("Random ID:", randomID);


//STEP 5 Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

// Sample Data and Output
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// function Longest_Country_Name(countryNames) {
//     let longestName = '';
//     let maxLength = 0;
//     for (let i = 0; i < countryNames.length; i++) {
//         if (countryNames[i].length > maxLength) {
//             longestName = countryNames[i];
//             maxLength = countryNames[i].length;
//         }
//     }

//     return longestName;
// }
// let countryNames = ["Australia", "Germany", "United States of America"];
// let longestCountry = Longest_Country_Name(countryNames);
// console.log("Longest country name:", longestCountry);