let numbers = [4,3, 10, 130]
console.log(Math.max(...numbers));


let skoda = ["octavia", "fabia", "superb"]
let seat = ["leon", "toledo", "exeo"]

let vag = [...skoda, ...seat];
console.log(vag)

let skodaCopy = [...skoda];

skoda.push("yeti");

console.log(skodaCopy)
console.log(skoda)

function addCar(car) {
    vag.push(car)
}

function addCarReactWay(car) {
    return [...vag, car]
}