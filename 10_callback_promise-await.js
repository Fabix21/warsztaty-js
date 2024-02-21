function sumNumbers(a, b) {
    return new Promise((resolve) => {
        const sum = a + b;
        resolve(sum);
    });
}

function squareNumber(number) {
    return new Promise((resolve) => {
        const square = number * number;
        resolve(square);
    });
}

function sum(a, b) {
    return new Promise((resolve) => {
        let result = a + b;
        resolve(result);
    });
}

function square(a) {
    return new Promise((resolve) => {
        let result = a * a;
        resolve(result);
    });
}

function displayResult(result) {
    console.log(result);
}

sum(5, 5)
    .then((sum) => square(sum))
    .then((sqr) => displayResult(sqr))
    .catch((error) => console.error(error)); // Obsługa błędów
///



async function showResults(a, b) {
    const sum = await sumNumbers(a, b);
    const square = await squareNumber(sum);
    const result = square;
    console.log(`Wynik: ${result}`);
}

showResults(5, 5);
