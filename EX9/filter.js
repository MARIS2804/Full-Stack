"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var products = [
    { id: 1, name: "laptop", price: 999 },
    { id: 2, name: "phone", price: 599 },
    { id: 3, name: "tablet", price: 799 }
];
var getProdById = function (id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return products[i];
        }
    }
    return undefined;
};
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var showMenu = function () {
    console.log("\n    Welcome to the Product System\n    1. List Products\n    2. Get Product by ID\n    3. Exit\n    ");
    rl.question('Select an option: ', function (option) {
        handleMenuOption(option);
    });
};
var handleMenuOption = function (option) {
    switch (option) {
        case '1':
            listProducts();
            break;
        case '2':
            rl.question('Enter product ID: ', function (id) {
                var product = getProdById(Number(id));
                if (product) {
                    console.log("Product Found: ID=".concat(product.id, ", Name=").concat(product.name, ", Price=").concat(product.price));
                }
                else {
                    console.log('Product not found');
                }
                showMenu();
            });
            break;
        case '3':
            console.log('Thank you for using the Product System');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            showMenu();
            break;
    }
};
var listProducts = function () {
    console.log('Product List:');
    products.forEach(function (product) {
        console.log("ID=".concat(product.id, ", Name=").concat(product.name, ", Price=").concat(product.price));
    });
    showMenu();
};
showMenu();
