/**----- Normal -----*/

// const numbers = [3, 5, 7];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output)


/**----- Map Step 1 -----*/

// const numbers = [3, 5, 7];

// numbers.map(function(element) {
//     console.log(element)
// })



/**----- Map Step 2 -----*/

// const numbers = [3, 5, 7];

// numbers.map(function(element, index) {
//     console.log(element, index)
// })


/**----- Map Step 3 -----*/

// const numbers = [3, 5, 7];

// numbers.map(function(element, index, array) {
//     console.log(element, index, array)
// })


/**----- Map Step 4 -----*/

// const numbers = [3, 5, 7];

// const result = numbers.map(function(element) {
//     return element * element;
// })

// console.log(result)


/**----- Map Step 5 -----*/

// const numbers = [3, 5, 7];

// const result = numbers.map(x => x * x);

// console.log(result)



/**----- Filter -----*/

// const numbers = [1, 3, 5, 7];

// const result = numbers.filter(x => x < 5);

// console.log(result)


/**----- Find -----*/

// const numbers = [1, 3, 5, 7, 9];

// const result = numbers.find(x => x > 5);

// console.log(result)


/**----- map in array -----*/

// const students = [
//     {id: 21, name: 'Shonjoy'},
//     {id: 31, name: 'Joy'},
//     {id: 41, name: 'Raj'},
//     {id: 71, name: 'Shouvo'},
// ]

// const names = students.map(s => s.name);
// const ids = students.map(s => s.id);

// console.log(names);
// console.log(ids);


/**----- filter in array -----*/

// const students = [
//     {id: 21, name: 'Shonjoy'},
//     {id: 31, name: 'Joy'},
//     {id: 41, name: 'Raj'},
//     {id: 71, name: 'Shouvo'},
// ]

// const ids = students.filter(s => s.id>50);
// console.log(ids);


/**----- find in array -----*/

const students = [
    {id: 21, name: 'Shonjoy'},
    {id: 31, name: 'Joy'},
    {id: 41, name: 'Raj'},
    {id: 71, name: 'Shouvo'},
]

const ids = students.find(s => s.id>50);
console.log(ids);