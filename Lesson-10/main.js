const Vehicle = function(model, year) {
    this.model = model;
    this.year = year;
}

Vehicle.prototype.start = function() {
    return "The engine has been started";
}
Vehicle.prototype.end = function() {
    return "Engine was off";
}

Vehicle.prototype.toString = function () {
    return `The model is ${this.model}. Release year ${this.year}`
}

const Car = function (model, year) {
    Vehicle.apply(this, arguments);
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


const car = new Car('Tesla', 2020);
console.log(car.model); // Tesla
console.log(car.year); // 2020
console.log(car.numWheels); // 4
console.log(car.start()); // The engine has been started
console.log(car.end()); // Engine was off
console.log(car.toString()); // The model is Tesla. Release year 2020


const Motorcycle = function (model, year) {
    Vehicle.apply(this, arguments)
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

const motorcycle = new Motorcycle('Suzuki', 2006);
console.log(motorcycle.model); // Suzuki
console.log(motorcycle.year); // 2006
console.log(motorcycle.numWheels); // 2
console.log(motorcycle.start()); // The engine has been started
console.log(motorcycle.end()); // Engine was off
console.log(motorcycle.toString()); // The model is Suzuki. Release year 2006