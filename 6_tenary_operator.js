
seat = {
    brand: "Seat",
    model: "Leon",
    engine: '2.0 TFSI',
    emmission: "EURO 5"
};

let cityEmissionZone = seat.emmission === "EURO 6" ? "You can enter" : "use public transport";

console.log(cityEmissionZone);
