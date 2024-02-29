/* Flyweight Design Pattern */

/* is a structural design pattern that lets you fit more objects into the
 available amount of RAM by sharing common parts of state between multiple objects,
  instead of keeping all of the data in each object. */

// Flyweight Factory
class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(key) {
        if (!this.flyweights[key]) {
            this.flyweights[key] = new ConcreteFlyweight(key);
        } 

        return this.flyweights[key];
    }

    countFlyweights() {
        return Object.keys(this.flyweights).length;
    }
}

// Flyweight Interface
class Flyweight {
    constructor(instrinsicState) {
        this.instrinsicState = instrinsicState;
    }

    operation(extrinsicState) {
        console.log(`Flyweight: Displaying instrinsic (${this.instrinsicState}) and extrinsic (${extrinsicState}) state.`);
    }
}

// Concrete Flyweight
class ConcreteFlyweight extends Flyweight {
    constructor(instrinsicState) {
        super(instrinsicState);
    }
}

// Usage
const flyweightFactory = new FlyweightFactory();
const flyweight1 = flyweightFactory.getFlyweight("sharedState");
const flyweight2 = flyweightFactory.getFlyweight("sharedState");

flyweight1.operation("state1");
flyweight2.operation("state2");

console.log(flyweightFactory.countFlyweights());

