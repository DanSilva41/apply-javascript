let answer = 42;
answer = 'Thanks for all the finish';
console.log(answer);


/*
In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings.
*/
answer = 'The answer is '+ 42;
console.log(answer); // "The answer is 42"

answer = '37'+ 7;
console.log(answer); // "377"

/*
With all other operators, JavaScript does not convert numeric values to strings.
*/
let result = '37' - 7;
console.log(result); // result is 30
result = '37' * 7;
console.log(result); // result is 259

// Arrays
const coffees = ['French', 'Brazil', 'USA'];
console.log(coffees); // ['French', 'Brazil', 'USA']

const coffeesTwoCommas = ['French', ,'Brazil'];
console.log(coffeesTwoCommas); // ['French', empty, 'USA']
console.log(coffeesTwoCommas.length); // Equal to 3