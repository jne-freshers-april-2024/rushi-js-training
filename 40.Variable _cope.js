/*
variable scope : means region of your code where our variable is created
There are 4 types of scopes :
   1) local scope
   2) global scope
   3) block scope
   4) lexical scope

*/

// 1) local scope :-  defining variables inside function called local scope
    //    Those variables will exist till end of the function 


function f1()    // inside function there is local scope
{
    let user = "Rushikesh Kadu";  
}


// 2) global scope  ->   In js, outside function, and outside class body whatever there it is called global scope

let address = "Mathura,maharashtra";
function getAddress()
{
    return address;
}


// 3) block scope - if statement inside curly bracket like inside loop or inside control statement called block scope

// 4) Lexical Scope -  when function defile inside function so inner function is in lexical scope


// JavaScript uses lexical scoping, which means that the scope of a variable is determined by its location within the code when it is defined.
//  This allows inner functions to access variables from outer functions, even after the outer function has finished executing.


// Ex:
 
function outerFunction()
{
    var outerVariable = 40;
    function innerFunction() 
    {
        console.log(outerVariable); // Output: 40
    }
    innerFunction();
}

outerFunction();