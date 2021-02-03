/**-----Step 1-----*/
// nums = [2, 4, 5, 6]

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     // console.log(num*2)
//     if(num % 2 == 0){
//         console.log(num, ": is even number.")
//     }else{
//         console.log(num * 2, ": is odd number.")
//     }
// }

// friendAge = [23, 43, 19, 22, 13]
// for (let i = 0; i < friendAge.length; i++) {
//     const age = friendAge[i];
//     if(age % 2 == 0){
//         console.log(age, ": is even number.")
//     }else{
//         console.log(age, ": is odd number.")
//     }
// }



/**-----Step 2-----*/

// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, ": is even number.")
//     }else{
//         console.log(num * 2, ": is odd number.")
//     }
// }

// nums = [2, 4, 5, 6]
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     evenify(num)
// }

// friendAge = [23, 43, 19, 22, 13]
// for (let i = 0; i < friendAge.length; i++) {
//     const age = friendAge[i];
//     evenify(age)
// }



/**-----Step 3-----*/

// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, ": is even number.")
//     }else{
//         console.log(num * 2, ": is odd number.")
//     }
// }

// function evenify_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         evenify(num)
//     }
// }

// nums = [2, 4, 5, 6]
// evenify_all(nums);

// friendAge = [23, 43, 19, 22, 13]
// evenify_all(friendAge)



/**-----Step 4-----*/

// function evenify_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if(num % 2 == 0){
//             console.log(num, ": is even number.")
//         }else{
//             console.log(num * 2, ": is odd number.")
//         }
//     }
// }

// nums = [2, 4, 5, 6]
// evenify_all(nums);

// friendAge = [23, 43, 19, 22, 13]
// evenify_all(friendAge)











/**-----Step 1-----*/

// function evenify(num){
//     if(num % 2 == 0){
//         return num;
//     }else{
//         return num * 2;
//     }
// }

// var result = evenify(8);
// var square = result * result;
// console.log("Result: ", square);

// function evenify_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         evenify(num)
//     }
// }

// nums = [2, 4, 5, 6]
// evenify_all(nums);

// friendAge = [23, 43, 19, 22, 13]
// evenify_all(friendAge)



/**-----Step 2-----*/

function evenify(num){
    if(num % 2 == 0){
        return num;
    }else{
        return num * 2;
    }
}

var result = evenify(8);
var square = result * result;
console.log("Result: ", square);

function evenify_all(nums){
    var even_array = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num)
        even_array.push(result);
    }
    return even_array;
}

nums = [2, 4, 5, 6]
var nums_even = evenify_all(nums);
console.log(nums_even)

// friendAge = [23, 43, 19, 22, 13]
// evenify_all(friendAge)