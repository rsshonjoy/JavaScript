/**-----Step 1-----*/

// function addNumber(num1, num2){
//     return num1 + num2;
// }
// var result = addNumber(3, 5);
// console.log(result)



/**-----Step 2-----*/

// function addNumber(num1, num2){
//     console.log(arguments)
//     return num1 + num2;
// }
// var result = addNumber(3, 5, 44, 63, 22, 42);
// console.log(result)



/**-----Step 3-----*/

// function addNumber(num1, num2){
//     console.log(arguments[4])
//     return num1 + num2;
// }
// var result = addNumber(3, 5, 44, 63, 22, 42);
// console.log(result)



/**-----Step 4-----*/

function addNumber(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = addNumber(3, 5, 2);
console.log(result)