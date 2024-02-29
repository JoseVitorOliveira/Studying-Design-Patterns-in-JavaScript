/* Strategy Design Pattern */

/* is a behavioral design pattern that enables selecting an algorithm at runtime. It defines a family
of algorithms, encapsulates each one of them, and makes them interchangeable. This pattern allows
the algorithm to vary independently from clients that use it. */

// Strategy 1
const operationAdd = (a, b) => a + b;

// Strategy 2
const operationSubtract = (a, b) => a - b;

// Strategy 3
const operationMultiply = (a, b) => a * b;

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.strategy(a, b);
    }
}

// Usage
const context = new Context(operationAdd);
console.log(context.executeStrategy(5, 3));

context.setStrategy(operationSubtract);
console.log(context.executeStrategy(5, 3));

context.setStrategy(operationMultiply);
console.log(context.executeStrategy(5, 3)); 
