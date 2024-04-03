// Initially when JS introduce callback for the asynchronous communication
// Then by defining callback we were implements asynchronous communication
// But, when we were did nestings of calls then it invokes callback hell problem
// callback hell has many more disadvantages -> 
//    1) hard to Read
//    2) hard to maintain
//    3) hard to debug


// so, to solve this problems, js introduce concept of promises.


// Creating promises

// Assume formSubmitted is a boolean variable indicating whether the form is submitted
const formSubmitted = true;

// Function to fetch data from the database
function fetchDataFromDB() {
    return new Promise((resolve, reject) => {
        // fetching data from the database
        setTimeout(() => {
            // Assuming data is successfully fetched
            const data = resolve(data);
        }, 1000);
    });
}

// Check if formSubmitted is true
if (formSubmitted) {
    // If formSubmitted is true, fetch data from DB
    fetchDataFromDB()
        .then((data) => {
            // Handle the fetched data
            console.log('Data fetched successfully:', data);
        })
        .catch((error) => {
            // Handle errors
            console.error('Error fetching data from DB:', error.message);
        });
} else {
    // If formSubmitted is false, display an error
    console.error('Form submission error: Form not submitted');
}
