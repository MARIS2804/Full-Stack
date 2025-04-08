import * as readline from 'readline';

class Queue<T> {
    private items: T[] = [];

    enqueue(value: T): void {
        this.items.push(value);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    display(): void {
        console.log(this.items);
    }
}

const queue = new Queue<number>();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
    console.log(`
    Queue Operations Menu:
    1. Enqueue
    2. Dequeue
    3. Check if Empty
    4. Display Queue
    5. Exit
    `);
    rl.question('Select an option: ', (option) => {
        handleMenuOption(option);
    });
};

const handleMenuOption = (option: string) => {
    switch (option) {
        case '1':
            rl.question('Enter value to enqueue: ', (value) => {
                queue.enqueue(Number(value));
                console.log(`Enqueued: ${value}`);
                showMenu();
            });
            break;
        case '2':
            const dequeuedValue = queue.dequeue();
            if (dequeuedValue !== undefined) {
                console.log(`Dequeued: ${dequeuedValue}`);
            } else {
                console.log('Queue is empty');
            }
            showMenu();
            break;
        case '3':
            console.log(`Is queue empty? ${queue.isEmpty()}`);
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