"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var ProductManager = /** @class */ (function () {
    function ProductManager(products) {
        this.products = products;
    }
    ProductManager.prototype.getUserInput = function (prompt) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return new Promise(function (resolve) {
            rl.question(prompt, function (answer) {
                rl.close();
                resolve(answer);
            });
        });
    };
    ProductManager.prototype.displayProductDetails = function (productId) {
        var product = this.products.find(function (p) { return p.id === productId; });
        if (product) {
            console.log("Product Details:");
            console.log("ID:", product.id);
            console.log("Name:", product.name);
            console.log("Price:", product.price);
        }
        else {
            console.log("Product not found.");
        }
    };
    return ProductManager;
}());
var products = [
    { id: 1, name: "TShirt", price: 100 },
    { id: 2, name: "Sarees", price: 200 },
    { id: 3, name: "Shirts", price: 300 },
    { id: 4, name: "Pants", price: 800 },
    { id: 5, name: "Tracks", price: 100 }
];
var productManager = new ProductManager(products);
productManager.getUserInput("Enter the product ID: ").then(function (input) {
    var productId = parseInt(input);
    if (!isNaN(productId)) {
        productManager.displayProductDetails(productId);
    }
    else {
        console.log("Invalid product ID. Please enter a number.");
    }
});
