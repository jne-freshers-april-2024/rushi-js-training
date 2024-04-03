// JS objects are data structure which is used to store key-value pair data
// An object in js is a collection of key-value pair, where keys are strings or symbols and values can any heterogeneous type data.

// Creating Object

// let emp1 = {
//     name:"RK",
//     age:22,
//     address:"Karanja"
// }


//  creating object by Object Constructor

// let emp2 = new Object();
// emp2.name = "AJ";
// emp2.age = 22;
// emp2.address="Washim";



// defining methods in object

let emp1 = {
    name:"RK",
    age:22,
    address:"Karanja",
    getData : function(){
        return emp1.name;
    }
}

