/**----- Normal Function -----*/

// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(7);
// console.log(result);


/**----- Function expression -----*/

// const doubleIt= function (num) {
//     return num * 2;
// }
// const result = doubleIt(7);
// console.log(result);


/**----- Arrow Function -----*/

/**----- single parameter arrow function -----*/

// const multiply = num => num * 2;

// const result = multiply(7);
// console.log(result);


/**----- multi parameter arrow function -----*/

// const addition = (x, y) => x + y;

// const result = addition(18, 19);
// console.log(result);


/**----- empty parameter arrow function -----*/

// const num = () => 37;

// const result = num();
// console.log(result)



const doMath = (x, y) => {
    const add = x + y;
    const sub = x - y;
    const result = add * sub;
    return result;
}

const result = doMath(7, 5)
console.log(result);