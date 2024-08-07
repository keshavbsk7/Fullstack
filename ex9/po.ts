import * as readline from 'readline';

interface Product {
    id: number;
    name: string;
    price: number;
}
class ProductManager {
    private products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }
    getUserInput(prompt: string): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise(resolve => {
            rl.question(prompt, answer => {
                rl.close();
                resolve(answer);
            });
        });
    }
    displayProductDetails(productId: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            console.log("Product Details:");
            console.log("ID:", product.id);
            console.log("Name:", product.name);
            console.log("Price:", product.price);
        } else {
            console.log("Product not found.");
        }
    }
}
const products: Product[] = [
    { id: 1, name: "TShirt", price: 100 },
    { id: 2, name: "Sarees", price: 200 },
    { id: 3, name: "Shirts", price: 300 },
    { id: 4, name: "Pants", price: 800 },
    { id: 5, name: "Tracks", price: 100 }
];
const productManager = new ProductManager(products);
productManager.getUserInput("Enter the product ID: ").then((input: string) => {
    const productId = parseInt(input);
    if (!isNaN(productId)) {
        productManager.displayProductDetails(productId);
    } else {
        console.log("Invalid product ID. Please enter a number.");
    }
});
