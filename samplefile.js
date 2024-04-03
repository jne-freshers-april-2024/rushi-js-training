let users = [
    {
        name : 'Abhay',
        age : 30
    
    },
    {
        name : 'Rushi',
        age : 22
    
    }
]


// let users = [
//     {
//         name : 'Abhay',
//         age : 30,
//         data : Date.now();
    
//     },
//     {
//         name : 'Rushi',
//         age : 22,
//         data : Date.now();

    
//     }
// ]

// let new_users = []
// for(let user of users)
// {
//     if(user.age<22)
//     {
//         new_users.push(user)
//     }
// }
// console.log("Users who's age is less than 22",new_users)
// for (const user of users) {  // async operations
//     user.test = 'aaaa';
// }
users.forEach(u=> {
    u.test = 'aaaa';
})
// let new_users = users.filter((user)=>{return user.age<22})
console.log(users)


// iteration
// async
