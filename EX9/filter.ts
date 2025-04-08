import * as readline from 'readline';

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "laptop", price: 999 },
    { id: 2, name: "phone", price: 599 },
    { id: 3, name: "tablet", price: 799 }
];

const getProdById = (id: number): Product | undefined => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return products[i];
        }
    }
    return undefined;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
    console.log(`
    Welcome to the Product System
    1. List Products
    2. Get Product by ID
    3. Exit
    `);
    rl.question('Select an option: ', (option) => {
        handleMenuOption(option);
    });
};

const handleMenuOption = (option: string) => {
    switch (option) {
        case '1':
            listProducts();
            break;
        case '2':
            rl.question('Enter product ID: ', (id) => {
                const product = getProdById(Number(id));
                if (product) {
                    console.log(`Product Found: ID=${product.id}, Name=${product.name}, Price=${product.price}`);
                } else {
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

const listProducts = () => {
    console.log('Product List:');
    products.forEach(product => {
        console.log(`ID=${product.id}, Name=${product.name}, Price=${product.price}`);
    });
    showMenu();
};

showMenu();