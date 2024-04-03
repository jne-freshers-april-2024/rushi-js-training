// Array is mutable
// Array is collection of similar types of elements 


// 1. creating array
// let arr1 = []       // ooh this is an empty array


// 2. array with elements
let arr2 = [1,2,3,4,5,6,7,8,9]      // Array with elements


// 3. accessing array elements by indexing
// console.log(arr2[0])



// 4. Properties and Methods in array
// console.log("Length of array :",arr2.length);


// 5. push() : append element in array at the end

// arr2.push(5)
// arr2.push(5,6,7)
// arr2.push([6,7,8,9])
// console.log(arr2)


// 6. pop() : remove last element from array and return it
// console.log(arr2.pop())



// 7. shift() : Removes first element from array and return it
// console.log(arr2.shift())


// 8. unshift():   add element at start in array
// console.log(arr2.unshift(0));  


// 9. slice() :    return the slice from array, doesn't change in current array
// start ->  inclusive  ,   end -> exclusive

// console.log(arr2.slice(2,4));


// 10. splice(startIndex,noOfArg) :   return the slice from the array by removing it from current array
// startIndex ->  from where to start
// noOfArg    ->  how many arguments should remove

// console.log(arr2.splice(2,3));


// 11. map() :- map() is used to map specified functionality with every element of an array.
// returns new array
// map() takes callback as an argument


// arr2.map((element,index)=>{
//     console.log(index,"  ",element);
// })




// 12. filter() :- filter() is used to filter out some element from array which satisfy specified condition
// filter takes callback as an argument
// returns new array

// let newArray = arr2.filter((element)=>{
//     return element%2==0
// })

// console.log(newArray)



// 14. forEach() :  forEach() is arrays method similar like loop
// used to access every element of array one by one
// Takes callback as an argument

// console.log(arr2)