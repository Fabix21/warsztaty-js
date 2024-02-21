const cars = [{
    brand: "VW",
    model: "Golf R",
    engine: {
        size: "2.0L", power: "320 KM"
    }
}, {
    brand: "Seat",
    model: "Cupra"
}]


let golfEnginePower = cars[0]?.engine?.power;

cupraEnginePower = cars[1]?.engine?.power;

console.log(cupraEnginePower)
