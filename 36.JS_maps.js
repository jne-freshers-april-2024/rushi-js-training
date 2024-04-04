/*
    Before ES6, If we want to store associated data then we were using object
    But object has some disadvantage - we can not store key as heterogeneous type
    In object, key can only be string / symbol
    If we store key like number type then js implicitly convert key into string

    So, If we want to store heterogeneous type of key then we use map data structure.


*/

/* map  -  1) ES6 provide new collection type called map
    2) map object hold key-value pair
    3) keys are unique
    4) values can repeat
    5) keys and values can be of hetegeneous type
    6) at the time of iterating map object, each member is array [key, value] which is collection of key and value.



*/


// 1. creating map

let map = new Map([
    [1,"Ajinkya"],
    [2,"Vedant"],
    [3,"Akash"],
    [4,"RK"],
    [5,"Abhinav"],
])





// 2. set(key,value) :-  used to set pair(key,value) into map,   By using set() method we can modify the value of map
// map.set(6,"Shubham");


// 3. get(key)
// console.log(map.get(5));


// 4. has(key)   :- To check key exist in map or not, return boolean type value.

// console.log(map.has(2));


// 5. size ->  this is property to get how many entries are there in map object


// 6. keys() -  returns map iterator which is collection of keys, we can iterate by using for of loop.

// let person_keys = map.keys()
// for(let key of person_keys){
//     console.log(key);
// }


// 7. values() - returns map iterator which is collection of values, we can iterate by using for of loop.

// 8. entries() - return all the pairs in the form of array ->  [[key,value],[key.value]]

// 9. delete(key) - It will delete the value associated with key.

// 10. clear() -  remove all the pairs from the map object
