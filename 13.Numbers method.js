//1) toFixed()  :  Convert number into string, rounding to specified number of decimal places

// x = 5.1256
// console.log(x.toFixed(2))
// console.log(x.toFixed(1))
// console.log(x.toFixed(0))     // increases num by 1 if digit after . >=5



// 2) toPrecision()  :  Formats number to specified length with toFixed feature and returns string

// var num = 123.456
// var num1 = 123.556
// console.log(num.toPrecision(4))
// console.log(num1.toPrecision(3))



// 3) toString() : converts number to string

x = 123
y = x.toString()
console.log(typeof y)


// 4) isNaN() ->  to check the data is NaN or not
// 5) isFinite()  ->  to check value is valid number or not
// 6) parseInt('123')   ->  converts string to Int
// 7) parseFloat('123.45')   ->  converts string to float