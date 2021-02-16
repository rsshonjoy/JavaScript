// Step 1

// const numbers = [18, 19];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);


// Step 2

// const [x, y] =  [18, 19];
// console.log(x, y);


// Step 3

// const numbers = [18, 19];
// const [x, y] =  numbers;
// console.log(x, y);


// Step 4

// function boxify(num) {
//     return [num, num + 5];
// }

// const boxer = boxify(37);
// console.log(boxer);


// Step 5



function boxify(num) {
    return [num, num + 5];
}

const [box1, box2] = boxify(37);
console.log(box1, box2);