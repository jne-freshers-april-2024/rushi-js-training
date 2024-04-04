/*

Note : JS code is read at 2 Times
    1) Compilation Phase   -> Hoisting is applied 
    2) Execution Phase     -> Execution is done

*/

/*
1) Hoisting is a javascript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase
2) In JS, every variable and function hoist to the top of it's scope
3) Anonymous and arrow function hoist but as variable if try to call before defination gives error that function_name is not a function
4) The variables which declared by using let and const keyword is hoist but before initialization if we access then gives ReferenceError
   Because, initially it is empty therefore it goes into the temporal dead zone.


*/