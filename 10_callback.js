

function sum(a,b, cb) {

}

function square(a, cb) {

}

function displayResult(result) {
    console.log(result);
}

sum(5, 5, (sum) => {
    square(sum, (sqr) => {
        displayResult(sqr)
    })
})