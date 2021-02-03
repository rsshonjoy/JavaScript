/**----- Double Array concatenate -----*/

// const num = [12, 34, 31, 18, 19, 37];
// const num2 = [11, 33, 22, 44, 55]
// const allNum = num.concat(num2);
// console.log(allNum);


/**----- Multi array concatenate -----*/

// const num = [12, 34, 31, 18, 19, 37];
// const num2 = [11, 33, 22, 44, 55]
// const num3 = [112, 334, 227, 447, 575]
// const allNum = num.concat(num2).concat([7777]).concat(num3);
// console.log(allNum);


/**----- Array concatenate using Spread Operator -----*/

// const num = [12, 34, 31, 18, 19, 37];
// const num2 = [11, 33, 22, 44, 55]
// const num3 = [112, 334, 227, 447, 575]
// const allNum = [...num, ...num2, 7777, ...num3];
// console.log(allNum);


/**----- Array max -----*/

/**----- Normal Math() function -----*/ 

// const business = 650;
// const engineer = 450;
// const hacker = 550;

// const maximum = Math.max(business, engineer, hacker);
// console.log(maximum);


/**----- Array Max -----*/

// const bankBalance = [555, 666, 777]
// const maximum = Math.max(bankBalance);
// console.log(maximum);


/**----- Array Max using Spread operator -----*/

const bankBalance = [555, 666, 777]
const maximum = Math.max(...bankBalance);
console.log(maximum);