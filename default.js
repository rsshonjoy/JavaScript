/** ----- default parameter ----- */

// method 1

function add(num1, num2) {
    num2 = num2 || 5;
    return num1 + num2;
}
console.log(add(18, 19));
console.log(add(18));


// method 2

function add(num1, num2 = 5) {
    return num1 + num2;
}
console.log(add(18, 19));
console.log(add(18));