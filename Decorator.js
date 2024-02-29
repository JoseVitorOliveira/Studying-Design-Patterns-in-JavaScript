/* Decorator Design Pattern */

/* is a structural pattern that allows adding new behaviors to objects dynamically
 by placing them inside wrapper objects. */

// Base class
class Pizza {
    cook() {
        return "Basic pizza";
    }
}

// Decorator class
class PizzaDecorator {
    constructor(pizza) {
        this.pizza = pizza;
    }

    cook() {
        return this.pizza.cook();
    }
}

// Concrete decorator classes
class CheeseDecorator extends PizzaDecorator {
    constructor(pizza) {
        super(pizza);
    }

    cook() {
        return `${super.cook()} with cheese`;
    }
}

class HamDecorator extends PizzaDecorator {
    constructor(pizza) {
        super(pizza);
    }

    cook() {
        return `${super.cook()} with ham`;
    }
}

// Usage
const basicPizza = new Pizza();
console.log(basicPizza.cook());

const cheesePizza = new CheeseDecorator(basicPizza);
console.log(cheesePizza.cook());

const hamPizza = new HamDecorator(basicPizza);
console.log(hamPizza.cook());

const cheeseHamPizza = new CheeseDecorator(new HamDecorator(basicPizza));
console.log(cheeseHamPizza.cook());
