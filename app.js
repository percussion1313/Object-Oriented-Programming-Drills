
//Added 5 people
/*var p1 = {
    name: 'Steve',
    sayHello: function () {
        console.log(`Hello! My name is ${p1.name}`);
    }
}
p1.sayHello();

var p2 = {
    name: 'Julian',
    sayHello: function () {
        console.log(`Hello! My name is ${p2.name}`);
    }
}

p2.sayHello();

var p3 = {
    name: 'Jordan',
    sayHello: function () {
        console.log(`Hello! My name is ${p3.name}`);
    }
}

p3.sayHello();

var p4 = {
    name: 'Scott',
    sayHello: function () {
        console.log(`Hello! My name is ${p4.name}`);
    }
}

p4.sayHello();

var p5 = {
    name: 'Cheryl',
    sayHello: function () {
        console.log(`Hello! My name is ${p5.name}`);
    }
}

p5.sayHello();


//The string we'll use.
(`Hey! My name is ${name} I am ${age} years old and live in ${location}`)

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

Person.prototype.sayHowdy = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.location}`);
}

let p1 = new Person('Steve', 63, 'Orlando');
let p2 = new Person('Julian', 30, 'Orlando');
let p3 = new Person('Jordan', 26, 'Orlando');
let p4 = new Person('Janice', 65, 'Orlando');
let p5 = new Person('Cheryl', 58, 'Orlando');

p1.sayHowdy();
p2.sayHowdy();
p3.sayHowdy();
p4.sayHowdy();
p5.sayHowdy();*/


//Used class designation
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    sayHowdy() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.location}`);
    }
}


let p1 = new Person('Steve', 63, 'Orlando');
let p2 = new Person('Julian', 30, 'Orlando')
let p3 = new Person('Jordan', 26, 'Orlando')
let p4 = new Person('Janice', 65, 'Orlando')
let p5 = new Person('Cheryl', 58, 'Orlando')

p1.sayHowdy();
p2.sayHowdy();
p3.sayHowdy();
p4.sayHowdy();
p5.sayHowdy();


//Inheritence;

class Vehicle {
    constructor(vehicleType, manufacturer, numberOfWheels) {
        this.vehicleType = vehicleType;
        this.manufacturer = manufacturer;
        this.numberOfWheels = numberOfWheels;
    }

    aboutVehicle() {
        console.log(`This ${this.vehicleType}, made by ${this.manufacturer} and has ${this.numberOfWheels} wheels.`)
    }
}

class Truck extends Vehicle {
    constructor(vehicleType, manufacturer, numberOfWheels, truckBed, numberofDoors) {
        super(vehicleType, manufacturer, numberOfWheels);

        this.truckBed = truckBed;
        this.numberofDoors = numberofDoors;

    }

    aboutTruck() {
        if (this.hasTruckBed == true) {
            console.log(`My truck has ${this.numberofDoors} doors and a truckbed!`);
        }
        else {
            console.log(`My truck has ${this.numberofDoors} doors and no truckbed`);
        }
    }
}

class Sedan extends Vehicle {
    constructor(vehicleType, manufacturer, numberOfWheels, sedanSize, milesPerGallon) {
        super(vehicleType, manufacturer, numberOfWheels);

        this.sedanSize = sedanSize;
        this.milesPerGallon = milesPerGallon;
    }

    aboutSedan() {
        console.log(`My sedan size is ${this.sedanSize} and gets ${this.milesPerGallon} miles per gallon`)

    }
}

class Motorcycle extends Vehicle {
    constructor(vehicleType, manufacturer, numberOfWheels, hasHandlebars, hasDoors) {
        super(vehicleType, manufacturer, numberOfWheels);

        this.hasHandlebars = hasHandlebars;
        this.hasDoors = hasDoors;
    }

    aboutMotorcyle() {
        if (this.hasHandlebars == true && this.hasDoors == false) {
            console.log('My motorcycle has handlebars and no doors');
        }
        else {
            console.log('I probably do not own an actual motorcycle');
        }

    }
}

let truck1 = new Truck('Truck', 'Toyota', 4, true, 4);
let sedan1 = new Sedan('Sedan', 'Subaru', 4, 'Medium', 35);
let motorcycle1 = new Motorcycle('Motorcycle', 'Yamaha', 2, true, false);

truck1.aboutVehicle();
sedan1.aboutVehicle();
motorcycle1.aboutVehicle();

truck1.aboutTruck();
sedan1.aboutSedan();
motorcycle1.aboutMotorcyle();

