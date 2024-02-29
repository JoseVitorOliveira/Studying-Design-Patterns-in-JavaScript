/* Observer Design Pattern */

/* is a behavioral design pattern where an object, known as the subject, maintains a list
of its dependents, called observers, and notifies them of any state changes, usually by
calling one of their methods.  */

// Subject
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }

}

// Observer
class Observer {
    update(data) {
        console.log(`Data has been updated: ${data}`);
    }
}

// Usage
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notify("Hello, World!");

subject.removeObserver(observer1);

subject.notify("Another update, World!");
