/** ----- array destructuring ----- */

// method 1

// const numbers = [18, 19];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);


// method 2

// const [x, y] =  [18, 19];
// console.log(x, y);


// method 3

// const numbers = [18, 19];
// const [x, y] =  numbers;
// console.log(x, y);


// method 4

// function boxify(num) {
//     return [num, num + 5];
// }

// const boxer = boxify(37);
// console.log(boxer);


// method 5

// function boxify(num) {
//     return [num, num + 5];
// }

// const [box1, box2] = boxify(37);
// console.log(box1, box2);



/** ----- object destructuring ----- */

// method 1

// const person = {name: 'Joy', age: '19'}
// console.log(person.name, person.age);
// console.log(person.name, person.age);
// console.log(person.name, person.age);


// method 2

// const {name, age} = {id: 2, name: 'Joy', age: '19', salary: 3700}

// console.log(name, age);
// console.log(name, age);
// console.log(name, age);


// method 3

const person = {id: 2, name: 'Joy', age: '19', salary: 3700};
const {salary} = person;

console.log(salary);
