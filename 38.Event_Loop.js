/*

1) Event loop is a mechanism which manages asynchronous operations and callback functions
2) Event loop is a part of javascript runtime enviornment such as web browser, javascript engine or nodejs
3) Event loop relies on 2 main data structures -> 1) callstack  2) Event Queue/Message Queue
4) callstack track the execution for synchronous code.
5) event loop provide us the feature of non blocking execution of code when we are dealing with asynchronous code
6) event loop push the asynchronous function call into event queue
7) event loop continuously monitor onto the callstack if it becomes empty then that time it push first asynchronous function call onto the callstack
   then asynchronous task get performs;

*/