
function isPrime(n){
    for (i = 2; i < n; i++){
        //console.log(i, n % i);
        if (n % i == 0){
            return "Not a Prime Number.";
        }
    }
    return "Your Number is a Prime Number.";
}
var result = isPrime(57);
console.log(result);