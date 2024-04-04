/*
1) async and await are keywords in JS
2) Both keywords introduce in ES8 (2017)
3) async : It is used to declare that function is asynchronous and always return a promise
           It means that function  will operate asynchronously and return promise
4) await : It is used inside an async function
           It pause the execution of function until promise is resolved
           It can only be used within functions with async keyword
           Javascript runtime will waits for that promise to resolve before continuing the execution of function

*/

async function fetchData(){
    let response = await fetch('https://localhost:8000/get-data/');
    let data = await response.json();
    return data;
}


/* 5) here if promise is resolved then it executes the code otherwise it throws an Error.
    and we can handle it by using try and catch block 

   6) Using try-catch block with async function */

async function fetchData()
{
    try{
        let response = await fetch("https://localhost:8000/emp/get-data/")
        let data = response.json();
        return data;
    }
    catch(error)
    {
       console.log("Error While Fetching Data:",error);
    }
}



/* 7) Sequential and parallel Execution */

async function fetchData(){
    let data1 = fetch('https://localhost:8000/get-emp-data/')
    let data2 = fetch('https://localhost:8000/get-customer-data/')
    console.log(data1,data2)
}

/* Explaination : async function fetchData() {: This line declares an asynchronous function named fetchData.

let data1 = fetch('https://localhost:8000/get-emp-data/'): Here, we're initiating an HTTP request to 
the URL 'https://localhost:8000/get-emp-data/' using the fetch() function. The fetch() function returns a Promise that represents the 
result of the asynchronous operation. However, it doesn't wait for the response to be resolved. Instead, it immediately returns a Promise object.


let data2 = fetch('https://localhost:8000/get-customer-data/'): Similarly, another HTTP request is initiated to the URL 
'https://localhost:8000/get-customer-data/' using the fetch() function. Like before, it returns a Promise object immediately.

console.log(data1, data2): Here, we log the data1 and data2 variables to the console. However, it's important to understand that at this 
point, data1 and data2 are not the actual response data but Promise objects representing the asynchronous operations

 Here 2 tasks are executing in parallel

*/




async function fetchData(){
    let data1 = await fetch('https://localhost:8000/get-emp-data/')
    let data2 = await fetch('https://localhost:8000/get-customer-data/')
    console.log(data1,data2)
}


// Here both tasks are executing sequentially
