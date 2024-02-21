
const audi=  {
    brand: "Audi",
    model: "S5",
    engine: "3.0 TFSI",
    toString: () => {console.log("silnik ", audi.engine, "model ", "marka", audi.brand )}
}

audi.toString()


function Car(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
}

let golf = new Car("VW", "Golf", "1.6MPI");

console.log(golf.model);