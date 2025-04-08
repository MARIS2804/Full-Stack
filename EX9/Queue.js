"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.items.push(value);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.display = function () {
        console.log(this.items);
    };
    return Queue;
}());
var queue = new Queue();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var showMenu = function () {
    console.log("\n    Queue Operations Menu:\n    1. Enqueue\n    2. Dequeue\n    3. Check if Empty\n    4. Display Queue\n    5. Exit\n    ");
    rl.question('Select an option: ', function (option) {
        handleMenuOption(option);
    });
};
var handleMenuOption = function (option) {
    switch (option) {
        case '1':
            rl.question('Enter value to enqueue: ', function (value) {
                queue.enqueue(Number(value));
                console.log("Enqueued: ".concat(value));
                showMenu();
            });
            break;
        case '2':
            var dequeuedValue = queue.dequeue();
            if (dequeuedValue !== undefined) {
                console.log("Dequeued: ".concat(dequeuedValue));
            }
            else {
                console.log('Queue is empty');
            }
            showMenu();
            break;
        case '3':
            console.log("Is queue empty? ".concat(queue.isEmpty()));
            showMenu();
            break;
        case '4':
            console.log('Queue contents:');
            queue.display();
            showMenu();
            break;
        case '5':
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            showMenu();
            break;
    }
};
showMenu();
