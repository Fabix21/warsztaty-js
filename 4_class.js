
class Vehicle {
    constructor(brand, model, wheels) {
        this.brand = brand;
        this.model = model;
        this.wheels = wheels;
    }

    getFullName() {
        return `${this.brand} ${this.model}`;
    }
    getWheels() {
        return this.wheels;
    }

}

const car = new Vehicle('VW', "GOLF", 4);
console.log(car.getWheels());

class Bike extends Vehicle {
    constructor(brand, model, year) {
        super(brand, model, 2);
        this.year = year;
    }
}

const bike = new Bike("Ducati", "1000R", 2014);
console.log(bike.year)
console.log(bike.getWheels())