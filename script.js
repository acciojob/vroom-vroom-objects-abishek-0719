// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); 
  this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Fix constructor pointer
SportsCar.prototype.constructor = SportsCar;

// Method on SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;


const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel()); 


console.log(car.getTopSpeed());


console.log(car instanceof Car);

console.log(car instanceof SportsCar);
