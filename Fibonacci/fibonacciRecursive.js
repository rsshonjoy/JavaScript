function fibonacci(n){
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;  //stoping condition
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result);



// Method-2
function fibonacciRecursive(num){
    // stopping condition
    if (num == 0){
        return [1];
    }if (num == 1){
        return [1, 1]
    }
    // recursive call
    var fibo = fibonacciRecursive(num - 1);
    var nextFibo = fibo[num-1] + fibo [num - 2];
    fibo.push(nextFibo);
    return fibo;
}
var result = fibonacciRecursive(10);
console.log(result);