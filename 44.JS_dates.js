/*
  In JS, date object is used to work with dates and time.
  It provides various methods to validate and formating dates.

*/

// creating date
// const date = new Date();



// converting date into readable form
// console.log(date.toDateString());      // used to convert date into readable form



// Creates a Date object for a specific date and time by passing year, month (0-indexed), day, hour, minute, second, and millisecond values.
// const date = new Date(2022, 0, 1, 12, 0, 0); // January 1, 2022, 12:00:00



// From String: Creates a Date object from a date string. The string should be in a recognized format.
// const dateString = '2022-01-01T12:00:00';
// const dateFromString = new Date(dateString);


// get methods

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth(); // January is 0, December is 11
const day = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
const dayOfWeek = now.getDay();



// set methods

const newDate = new Date();
newDate.setFullYear(2023);
newDate.setMonth(6); // July (0-indexed)
newDate.setDate(15);
newDate.setHours(14);
newDate.setMinutes(30);
newDate.setSeconds(0);



