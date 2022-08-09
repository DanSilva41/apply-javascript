function sum(a, b) {
    return a + b;
}

function reduceSum(a, b) {
    return a += b;
}

function reduceSub(a, b) {
    return a -= b;
}

function reduceMult(a, b) {
    return a *= b;
}

var a = 2;
var b = 3;
console.log(sum(a,b));
console.log(reduceSum(a,b));
console.log(reduceSub(a,b));
console.log(reduceMult(a,b));
console.log(a ** b); // exponentiation


