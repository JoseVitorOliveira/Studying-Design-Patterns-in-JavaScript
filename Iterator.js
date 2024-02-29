/* Iterator Design Pattern */

/* is a behavioral design pattern that lets you traverse elements of a collection without
 exposing its underlying representation (list, stack, tree, etc.). */

// Example of Collection
class Collection {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    // Iterator
    [Symbol.iterator]() {
        let index = 0;
        let items = this.items;
        return {
            next: function () {
                return index < items.length ? { value: items[index++], done: false } : { done: true };
            }
        };
    }
}

// Usage
const collection = new Collection();
collection.addItem("item1");
collection.addItem("item2");
collection.addItem("item3");

for (const item of collection) {
    console.log("Item:", item);
}