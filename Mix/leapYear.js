//Check leap Year


// Method 1
const year = 3998;
let remainder = year % 4;
if (remainder == 0){
    console.log("Your Year is a Leap Year");
}
else{
    console.log("Your Year is not a Leap Year")
}


// Method 2
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }else{
        return false;
    }
}

const check2000 = isLeapYear(1700);
console.log(check2000);