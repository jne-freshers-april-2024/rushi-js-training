/*
1) call stack is a data structure 
2) This data structure works on Last in First out principle
3) In js script, when there is a function call then interpreter push function call to the callstack to keep track where the execution is in the script
4) when execution of function completes, interpreter removes from the callstack and resume the execution from the last point at which the function was called
5) call stack can occur stackoverflow error if there is too much calls on stack
*/