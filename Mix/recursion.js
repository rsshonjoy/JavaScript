// 1. Iterative thinking: the for loops:

function pow(x, n){
    let result = 1;
    for(let i = 0; i < n; i++){
        result *= x
    }
    return result;
}
console.log(pow(2, 3));


// 2. Recursive thinking: simplifi the task and call self:

function pow(x, n){
    if (n == 1){
        return x;
    }else {
        return x * pow(x, n - 1);
    }
}
console.log(pow (2, 3));




function pow(km){
    if (km >= 1){
        return km;
    }else {
        
        console.log("fail")
    }
}



console.log(pow (-8));