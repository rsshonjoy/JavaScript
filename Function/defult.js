/**-----Normal Function-----*/

// function add(num1, num2) {
//     return num1 + num2;
// }
// const total = add(18, 19);
// console.log(total)


/**-----Problem-----*/

// function add(num1, num2) {
//     return num1 + num2;
// }
// const total = add(37);
// console.log(total)


/**-----Solution 1-----*/

// function add(num1, num2) {
//     if (num2 == undefined) {
//         num2 = 0;
//     }
//     return num1 + num2;
// }
// const total = add(37);
// console.log(total)


/**-----Solution 2-----*/

/**-----Example 1-----*/

// function add(num1, num2) {
//     num2 = num2 || 0;
//     return num1 + num2;
// }
// const total = add(37);
// console.log(total)

/**-----Example 2-----*/

// function add(num1, num2) {
//     num2 = num2 || 10;
//     return num1 + num2;
// }
// const total = add(37);
// console.log(total)


/**-----Solution 3-----*/

/**-----Example 1-----*/

// function add(num1, num2 = 0) {
//     return num1 + num2;
// }
// const total = add(37);
// console.log(total)

/**-----Example 2-----*/

// function add(num1, num2 = 10) {
//     return num1 + num2;
// }
// const total = add(37);
// console.log(total)

/**-----Example 3-----*/

function add(num1, num2 = 10) {
    return num1 + num2;
}
const total = add(18, 19);
console.log(total)