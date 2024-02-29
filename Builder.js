/* Builder Design Pattern */

/* is a creational design pattern used to construct complex objects step by step.
It separates the construction of a complex object from its representation, allowing
the same construction process to create different representations.  */

class House {
  constructor() {
    this.foundation = "";
    this.walls = "";
    this.roof = "";
  }
}

class HouseBuilder {
  constructor() {
    this.house = new House();
  }

  buildFoundation(foundation) {
    this.house.foundation = foundation;
    return this; // Return the builder instance for method chaining
  }

  buildWalls(walls) {
    this.house.walls = walls;
    return this;
  }

  buildRoof(roof) {
    this.house.roof = roof;
    return this;
  }

  getResult() {
    return this.house;
  }
}

// Usage
const builder = new HouseBuilder();
const house = builder
  .buildFoundation("Concrete")
  .buildWalls("Brick")
  .buildRoof("Tiles")
  .getResult();

console.log(house);

const builder2 = new HouseBuilder();
const house2 = builder2
  .buildFoundation("Concrete")
  .buildWalls("Brick")
  .getResult();

console.log(house2);
