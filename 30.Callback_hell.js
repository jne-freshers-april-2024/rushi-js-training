// callback hell :  callback hell means when we do nesting of calls at the time of defining function then it's called callback hell

// Disadvantages :    1) Hard to read
                //    2) Hard to maintain
                //    3) Hard to Debug



// Ex:

function task1(callback)
{
    setTimeout(()=>{
        console.log("Fetching Data");
        callback();
    },4000)
}

function task2(callback)
{
    setTimeout(()=>{
        console.log("Uploading Music");
        callback();
    })
}

function task3(callback)
{
    setTimeout(()=>{
        console.log("Saving Data into DB");
        callback();
    })
}

task1(function(){
    task2(function(){
        task3(function(){
            console.log("Async Task Completed");
        })
    })
})



// In callbacks execution of calls are in top to down manner.