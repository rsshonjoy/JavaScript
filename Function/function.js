/**-------simple function-------*/
function addition(){
    var num = 5;
    var result = num + num;
    console.log("Addition = " + result);
}

// calling a function
addition();
addition();


/**-------returning function-------*/
function subtraction(num3, num4){
    var result = num3 - num4;
    return result;
}

var x = subtraction(25, 6);
console.log("Subtraction = " + x);

console.log("Subtraction = " + subtraction(5, 7));


/**-------parameterized function-------*/
function multiplication(num1, num2){
    var result = num1 * num2;
    return result;
}

var x = multiplication(4, 6);
console.log("Multiplication = " + x);

console.log("Multiplication = " + multiplication(5, 7));


/**-------Rest parameterized function-------*/
function something(...x){
    console.log(x);
}
something(2,4,5,6,"r","shonjoy")

function something2(...x){
    console.log(x[4]);
}
something2(2,4,5,6,"rs","shonhoy")



function calculator(...numbers){
    let sum = 0;
    for(let i of numbers){
        sum = sum + i;
    }
    return sum;
}
var x = calculator(2,3,4,6,7,5)
console.log("rest parameter = " + x)


/**-------normal + Rest parameterized function-------*/
function calculator2(a, b, ...numbers){
    let add = a + b;
    let sum = 0;
    for(let i of numbers){
        sum = sum + i;
    }
    return sum ;
}
var x = calculator2(20,30,4,6,7,5)
console.log( "normal + Rest parameter = " + x)
