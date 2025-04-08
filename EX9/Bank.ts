import * as readline from 'readline';

class Bank {
    private ac: number;
    private bal: number;
    private name: string;

    constructor(a: number, b: number, c: string) {
        this.ac = a;
        this.bal = b;
        this.name = c;
    }

    public withdraw(amt: number): string {
        if ((this.bal - amt) < 0) {
            return 'Balance insufficient';
        }
        this.bal -= amt;
        return 'Withdrawn successfully';
    }

    public credit(amt: number): void {
        this.bal += amt;
    }

    public checkBal(): number {
        return this.bal;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bankAccount = new Bank(123456, 1000, "John Doe");

const showMenu = () => {
    console.log(`
    Welcome to the Bank System
    1. Check Balance
    2. Withdraw
    3. Credit
    4. Exit
    `);
    rl.question('Select an option: ', (option) => {
        handleMenuOption(option);
    });
};

const handleMenuOption = (option: string) => {
    switch (option) {
        case '1':
            console.log(`Current Balance: ${bankAccount.checkBal()}`);
            showMenu();
            break;
        case '2':
            rl.question('Enter amount to withdraw: ', (amount) => {
                const message = bankAccount.withdraw(Number(amount));
                console.log(message);
                showMenu();
            });
            break;
        case '3':
            rl.question('Enter amount to credit: ', (amount) => {
                bankAccount.credit(Number(amount));
                console.log('Amount credited successfully');
                showMenu();
            });
            break;
        case '4':
            console.log('Thank you for using the Bank System');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            showMenu();
            break;
    }
};

showMenu();