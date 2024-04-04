/*
   1) when we access outer function data from inner function then it's called as closure
   2) lexical scope -> particular area ( but accessing variables from that are are called closures)
*/


// Ex:

function outerFunction()
{
    let user = "RK";
    function innerFunction()
    {
        console.log(user)
    }
    return innerFunction
}


const fun = outerFunction()
fun()

// For data privacy we can use this concept - u want to use private data but it is not in scope so it can maintain privacy