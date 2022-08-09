/* Variables
    - Start with: letter, underscore or dollar sign
    - subsequent characters: 0-9 or A-Z(a-z)
    - ISO 8859-1 or Unicode characters
*/
var Numbers_hits, temp99, $credit, _name;

// var: variable, optionally initialized
var firstName = 'Bob';
var lastName;
lastName = 'Dick';

// let: local variable, optionally initialized
var currentMoney = 2.75;
var grossValue;
grossValue = 2.65;

// const: immutable variable, only read
const id = 1;
// const email; // NOT ALLOWED
// email = 'email@gmail.com';

var a;
console.log('The value of a is(undefined): ' + a);

console.log('The value of b is(undefined): ' + b);
var b; // This one may puzzle you until you read 'Variable hoisting' below

// console.log('The value of c is(undefined): '+ c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is(undefined) ' + x);

// console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
// let y;

/*
The undefined value converts to NaN when used in numeric context
*/
let nothing;
console.log(nothing + 2);

/*
When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts.
*/
const n = null;
console.log(n * 32);

/*
let and const declarations are scoped to the block statement that they are declared in
*/
if (Math.random() > 0.5) {
    const y = 5;
}
// console.log(y); // ReferenceError: y is not defined

/*
However, variables created with var are not block-scoped, but only local to the function (or global scope) that the block resides within.
*/
if (true) {
    var variable = 5;
}
console.log(variable); // variable is 5

// Hosting

/*
Functions are hoisted if they're defined using function declarations — but functions are not hoisted if they're defined using function expressions.
*/

functionHosting(); // "Function hoisting"

/* Function declaration */
function functionHosting() {
  console.log('Function hoisting');
}
