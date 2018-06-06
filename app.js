
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

p5.sayHello(); */


//The string we'll use.
/*(`Hey! My name is ${name} I am ${age} years old and live in ${location}`)*/

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location
   }
   
Person.prototype.sayHowdy = function() {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.location}`);
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