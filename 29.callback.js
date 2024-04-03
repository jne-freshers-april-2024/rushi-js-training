// 1. callback : 
//1) Passing one function as an argument to the another function that's called callback
//2) we implement callback to achieve asynchronous communication
//3) callbacks are powerfull tool for handling asynchronous code
//4) If want's to fetch data from server so that time we require to implement asynchronous code, so to complete this task we write 
//     this code inside callback for making it asynchronous.


// Q) Why should make code asynchronous

//5) Because, Fetching data from server take time, so other task should not block because of fetching data operation, so that we will execute
//   this operations parallel to improve performance.

//Ex:
function fetchingData(callback)
{
    callback();
}


fetchingData(()=>{
    console.log("Fetching Data");
})


// Here, I want to make fetchingData as asynchrous function, therefore I have used the callback concept




// Note :  callback can raise callback hell problem if we deeply nested functions and also make code hard to read and maintain.
