// String is immutable
// Note : In JS, no single one method makes changes in current string instead it returns new String




// 1) Ways of writing String

// let str1 = "Let's Fun with JS";
// let str2 = 'Let Fun with JS';
// let str3 = `Let's Fun with JS`;



// 2) String Constructor

// let str = new String("Welcome to JS");
// console.log(str,typeof str)



// 3) length : String object has length property to get length of string
// let str = "JS can be used at FrontEnd as well as BackEnd"
// console.log(str.length)



// 4) accessing characters of String

// let x = "M.S Dhoni";
// console.log(x[0])
// console.log(x[x.length - 1])


// String Methods:
// 5) charAt()  :  returns character of specified index

// let x = "M.S Dhoni";
// console.log("First Character:",x.charAt(0));
// console.log("Last Character:",x.charAt(x.length-1));


// 6) charCodeAt() :- returns UTF-16 ( character encoding code

// x = "abc"
// console.log(x.charCodeAt(0))


// 7) slice() :-  returns the subpart of string
// Takes 2 arg, start and end ->  start is inclusive,   end -> end is exclusive

// let text = "Apple Banana Kiwi";
// console.log(text.slice(6,12));


// 8) toUpperCase() :-  returns upper case of the string

// let text = "Apple Banana Kiwi";
// console.log(text.toUpperCase())


// 9) toLowerCase()  :  returns lower case of string

// let text = "Apple Banana Kiwi";
// console.log(text.toLowerCase())



// 10) concate() : Used to concate multiple strings into single String

// let str1 = "Hello" + " " +"World";
// let str2 = "Hello".concat(" ","World");
// console.log(str1,"\n",str2);


// 11) trim() : used to remove whitespace from both end

// let string1 = "      Hello World     ";
// console.log(string1)
// console.log(string1.trim())


// 12) trimStart() : removes whitespaces only from start
// 13) trimEnd()  : removes whitespaces only from end

// 14) padStart(n,char) : prefix string object with specified char n-1 times
// let text = '5';
// console.log(text.padStart(4,'0'))

// 15) padEnd(n,char) : suffix string object with specified char n-1 times
// let text = '5';
// console.log(text.padEnd(4,'0'))


// 16) repeat(n) : repeat string n times, doesn't change in current string instead return new string

// let x = '5'
// console.log("New String:",x.repeat(5));



// 17) replace(searchValue,replaceValue) :  replace string with specified string with first occured occurence
// returns new string
// comparison is case-sensitive

// let x = "Please Play with Javascript and Javascript";
// console.log(x.replace('Javascript',"JS"))


// 18) split() :   returns array of string separeted by separater
// By default separator is ''

// let x = "Let's fun with javascript";
// let y = "1,2,3,4,5"
// console.log(x.split(' '));
// console.log(y.split())