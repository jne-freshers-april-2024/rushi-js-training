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

// let emp1 = {
//     name:"RK",
//     age:22,
//     address:"Karanja",
//     getName : function(){
//         return emp1.name;
//     }
// }

// let name = emp1.getName()
// console.log(name)




// Defining Class
// Note: In js, we can not create object of class without using new keyword
//       Before class name it is mandatory to put new keyword.
//       constructor is keyword in js


class Person
{
    constructor(name,gender)
    {
        this.name = name
        this.gender = gender
    }
    getData()
    {
        return this.name+" "+this.gender;
    }
}

let emp1 = new Person("Ajay Sir",22);
// let emp2 = new Person("Sujit",29);
// console.log(emp1.getData())
// console.log(emp2.getData())


// Accessing Properties

// let emp1 = new Person("Bob",99);
// console.log(emp1.name);
// console.log(emp1['name']);



// adding properties to the object

// emp1.salary = 900000;
// console.log(emp1.getData())


// delete properties 

// delete emp1.salary;



// For iterating properties of object we can use for in loop

// for(let key in emp1)
// {
//     console.log(key," ",emp1[key]);
// }



// in operator  -   if want's to check property exist in object or not

// console.log('salary' in emp1)



// Destructuring :

let {name:n , gender:g} = emp1;
console.log(n,g)


// JSON : Javascript Object Notation
//        Javascript Object Notation is a light weight data interchange format.
//        Objects in javascript can easily converted in JSON or vice versa
//        To convert object to JSON ->   JSON.stringify(user)  
//        Type of JSON object is string
//        To convert JSON object to object use -> JSON.parse(JSONText)





// let user = {
//     name : "Somnath",
//     age : 22,
//     salary : 1000000,
//     address : 'Mathura'
// }

// creating JSON Object

// console.log(user,"\nType:",typeof user);

// let JSONuser = JSON.stringify(user)
// console.log(JSONuser,"\nType:",typeof JSONuser);




