/* Factory Design Pattern */

/* is a creational pattern that provides an interface for creating objects
 but allows subclasses to alter the type of objects that will be created. */


function ColorFactory() {} // Factory

ColorFactory.prototype.createColor = function (color) { // Factory Method
    switch (color) {
        case 'red':
            return new Red();
        case 'green':
            return new Green();
        case 'blue':
            return new Blue();
    }
}

function Red() {
    this.color = 'red';
    this.paint = function () {
        console.log("Painting the wall " + this.color + "!");
    }
}

function Green() {
    this.color = 'green';
    this.paint = function () {
        console.log("Painting the wall " + this.color + "!");
    }
}

function Blue() {
    this.color = 'blue';
    this.paint = function () {
        console.log("Painting the wall " + this.color + "!");
    }
}

// Usage
const factory = new ColorFactory();
const red = factory.createColor('red');
const green = factory.createColor('green');
const blue = factory.createColor('blue');

red.paint(); // Painting the wall red!
green.paint(); // Painting the wall green!
blue.paint(); // Painting the wall blue!