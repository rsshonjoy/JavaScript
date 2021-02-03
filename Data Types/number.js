/**-----Type Conversion-----*/

// Number to String
var num = 20;
num = toString(num);
console.log(typeof(num));

// String to Number
// Method-1 Using parseInt() Function
var num = "rs shonjoy";
num = parseInt(num);
console.log(typeof(num));

// Method-2 Using parseFloat() Function
var num = "20.3";
num = parseFloat(num);
console.log(typeof(num));

// Method-3 Using Number() Function
console.log(Number("124"));
console.log(typeof(Number("124")))


/**----- Number Method-----*/
var number = 2.4956754
console.log(number.toFixed(2));

var number = 2.4956754
console.log(number.toPrecision(2));

