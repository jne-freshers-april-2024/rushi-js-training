// Events : The action which is performed by the user is called as events
// Event Handling : when the event occurs so that time which js function should execute 
                    // This binding of event with particular js function is called as event Handling




function fetchData()
{
    let data = fetch("https://localhost:8000/fetch_emp_data")
    console.log(data);
}


let button = document.querySelector('#fetch')
button.addEventListener('click',fetchData);


//DOM Event Handlers: Events can be attached using the addEventListener method.