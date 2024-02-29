/* Singleton Design Pattern */

/* is a creational pattern that ensures a class has only one instance and provides
a global point of access to that instance. */

function Singleton() {
    let instance;

    function createInstance() {
        return {
            property: 'value',
            method: function () {
                console.log('Method');
            }
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
}

// Usage
const singleton = Singleton();
const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

console.log(instance1 === instance2);

instance1.method(); 
instance2.method();



