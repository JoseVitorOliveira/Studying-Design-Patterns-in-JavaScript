/* Mediator Design Pattern */

/* is a behavioral design pattern that lets you reduce chaotic dependencies between objects. */

/* It helps in decoupling the objects involved in communication, as they no longer need to know
 about each other directly. Instead, they communicate through the mediator, reducing dependencies
  and making the system more flexible and maintainable. */

// Mediator
class ChatRoom {
    constructor() {
        this.users = [];
    }

    addColleague(user) {
        this.users.push(user);
    }

    broadcast(sender, message) {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receive(message);
            }
        });
    }
}

// Colleague
class User {
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
        this.chatRoom.addColleague(this);
    }

    send(message) {
        this.chatRoom.broadcast(this, message);
    }

    receive(message) {
        console.log(`${this.name} received message: ${message}`);
    }
}

// Usage
const chatRoom = new ChatRoom();
const user1 = new User("User1", chatRoom);
const user2 = new User("User2", chatRoom);

user1.send("Hello, User2!");
user2.send("Hello, User1!");
