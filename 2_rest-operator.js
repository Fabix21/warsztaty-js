
const brand1 = "skoda"
const brand2 = "seat"
const brand3 ="VW"
const brand4 = "Audi"

function displayVAG(brands) {
    console.log(...brands);
}

displayVAG([brand1, brand2, brand3, brand4])

function sum(...numbers) {
    let sum = 0;
    for(let number of numbers) {
        sum += number
    }
    return sum;
}

console.log(sum(4,5,10,40))