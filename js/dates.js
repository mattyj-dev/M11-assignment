//STEP 1 Create an application that gets the number of days in a month. Display that result within the console window.

// let month = parseInt(prompt("Enter the month (1-12):"));
// let year = parseInt(prompt("Enter the year:"));
// function getDaysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
// }
// let daysInMonth = getDaysInMonth(month, year);
// console.log("Number of days in the specified month:", daysInMonth);


//STEP 2 Create an application that gets the month name from a particular date. Display that result within the console window.

// let dateString = prompt("Enter a date in the format YYYY-MM-DD:");
// let date = new Date(dateString);
// let monthNames = [
//   "January", "February", "March",
//   "April", "May", "June", "July",
//   "August", "September", "October",
//   "November", "December"
// ];
// let monthIndex = date.getMonth();
// let monthName = monthNames[monthIndex];
// console.log("Month name:", monthName);


//STEP 3 Create an application that tests whether a date is a weekend. Display that result within the console window.

// let dateString = prompt("Enter a date in the format YYYY-MM-DD:");
// let date = new Date(dateString);
// let dayOfWeek = date.getDay();
// let isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
// if (isWeekend) {
//   console.log("The entered date is a weekend.");
// } else {
//   console.log("The entered date is not a weekend.");
// }


//STEP 4 Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.

// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let currentDate = new Date();
// let yesterdayIndex = (currentDate.getDay() - 1 + 7) % 7;
// let yesterdayName = dayNames[yesterdayIndex];
// console.log("Yesterday's day of the week:", yesterdayName);


//STEP 5 Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let currentDate = new Date();
// let currentDayIndex = currentDate.getDay();
// let firstLetterOfDay = dayNames[currentDayIndex].charAt(0);
// console.log("First letter of the day of the week:", firstLetterOfDay);

