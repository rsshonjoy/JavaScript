/**----- undefined method 1 -----*/

// let name;   //without variable declared
// console.log(name)


/**----- undefined method 2 -----*/

// function add(num1, num2) {
//     console.log(num1 + num2)    //without return a function
// }
// const result = add(18, 19);
// console.log(result);


/**----- undefined method 3 -----*/

// function add(num1, num2) {
//     console.log(num1 , num2)    //without passing a parameter
// }
// const result = add(37);
// console.log(result);

// function doSomething(x, y){
//     console.log(y);
// }
// doSomething(32);


/**----- undefined method 4 -----*/


// const person = {name:"Shonjoy", phone:"01311401701"};    //gf property is undefined is person object
// console.log(person.gf);


function doSomething(x, y = 4){
    console.log(y);
}
doSomething(3,2);