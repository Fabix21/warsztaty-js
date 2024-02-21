let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
    return number % 2 === 0;
}

let filter = numbers.filter(isEven);

console.log(filter);

let npmIsEven = require('is-even');

console.log(numbers.filter(npmIsEven));
