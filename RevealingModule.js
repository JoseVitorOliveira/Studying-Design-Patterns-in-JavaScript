/* Revealing Module Design Pattern */

/* leverages closures and immediately-invoked function expressions (IIFE) to encapsulate
 private data and reveal only the necessary parts of an object or module. */

const CounterModule = (() => {
  let counter = 0;

  const incrementCounter = () => {
    counter++;
  };

  const decrementCounter = () => {
    counter--;
  };

  const resetCounter = () => {
    counter = 0;
  };

  const getCounterValue = () => {
    return counter;
  };

  return {
    increment: incrementCounter,
    decrement: decrementCounter,
    reset: resetCounter,
    getValue: getCounterValue,
  };
})();

// Example usage
CounterModule.increment();
CounterModule.increment();
console.log("Counter value:", CounterModule.getValue());

CounterModule.decrement();
console.log("Counter value after decrement:", CounterModule.getValue());

CounterModule.reset();
console.log("Counter value after reset:", CounterModule.getValue());
