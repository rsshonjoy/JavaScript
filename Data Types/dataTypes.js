// JS Nuggets: Data Types

// There are 7 data types

// Boolean

var data = false;

if (data) {
    console.log("Booleans rule!")
}else {
    console.log("Booleans are lame.")
}


// null

var n = null;
console.log(n * 32);


// undefined

var a;
console.log(a + 2);


// Number

var num1 = 3.6
var num2 = 6.4
console.log(num1 + num2)


// String

var name = "Shonjoy"
console.log("Hi! My name is " + name + ".")


// Symbol

var sym1 = Symbol("foo")
var sym2 = Symbol("foo")
console.log(sym1 === sym2)
console.log(String(sym1) === String(sym2))
console.log(String(sym1))


// Object

var myCar = new Object()
myCar.name = "Tesla"
myCar.model = "Model 3"

console.log(myCar.name)
console.log(myCar.model)