"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Bank = /** @class */ (function () {
    function Bank(a, b, c) {
        this.ac = a;
        this.bal = b;
        this.name = c;
    }
    Bank.prototype.withdraw = function (amt) {
        if ((this.bal - amt) < 0) {
            return 'Balance insufficient';
        }
        this.bal -= amt;
        return 'Withdrawn successfully';
    };
    Bank.prototype.credit = function (amt) {
        this.bal += amt;
    };
    Bank.prototype.checkBal = function () {
        return this.bal;
    };
    return Bank;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var bankAccount = new Bank(123456, 1000, "John Doe");
var showMenu = function () {
    console.log("\n    Welcome to the Bank System\n    1. Check Balance\n    2. Withdraw\n    3. Credit\n    4. Exit\n    ");
    rl.question('Select an option: ', function (option) {
        handleMenuOption(option);
    });
};
var handleMenuOption = function (option) {
    switch (option) {
        case '1':
            console.log("Current Balance: ".concat(bankAccount.checkBal()));
            showMenu();
            break;
        case '2':
            rl.question('Enter amount to withdraw: ', function (amount) {
                var message = bankAccount.withdraw(Number(amount));
                console.log(message);
                showMenu();
            });
            break;
        case '3':
            rl.question('Enter amount to credit: ', function (amount) {
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
