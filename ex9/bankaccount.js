var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    // Method to deposit funds
    BankAccount.prototype.credit = function (amount) {
        this.balance += amount;
        console.log("Credited ".concat(amount, " to ").concat(this.accountHolder, "'s account. New balance: ").concat(this.balance));
    };
    // Method to withdraw funds
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn ".concat(amount, " from ").concat(this.accountHolder, "'s account. New balance: ").concat(this.balance));
        }
        else {
            console.log("Insufficient funds to withdraw ".concat(amount, " from ").concat(this.accountHolder, "'s account."));
        }
    };
    // Method to check balance
    BankAccount.prototype.checkBalance = function () {
        console.log("Balance for ".concat(this.accountHolder, "'s account: ").concat(this.balance));
    };
    return BankAccount;
}());
// Menu for operations
var menu = "\n  Bank Account Operations Menu:\n  1. Credit funds\n  2. Withdraw funds\n  3. Check balance\n  4. Exit\n  ";
// Function to create a bank account
function createAccount() {
    var readlineSync = require('readline-sync');
    var accountHolder = readlineSync.question('Enter account holder name: ');
    var initialBalance = parseFloat(readlineSync.question('Enter initial balance: '));
    return new BankAccount(accountHolder, initialBalance);
}
// Function to handle user input
function handleInput(account) {
    var readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log(menu);
    readline.question('Enter your choice: ', function (choice) {
        switch (choice) {
            case '1':
                readline.question('Enter amount to credit: ', function (amount) {
                    account.credit(parseFloat(amount));
                    readline.close();
                    handleInput(account);
                });
                break;
            case '2':
                readline.question('Enter amount to withdraw: ', function (amount) {
                    account.withdraw(parseFloat(amount));
                    readline.close();
                    handleInput(account);
                });
                break;
            case '3':
                account.checkBalance();
                readline.close();
                handleInput(account);
                break;
            case '4':
                console.log('Exiting...');
                readline.close();
                break;
            default:
                console.log('Invalid choice. Please enter a valid option.');
                readline.close();
                handleInput(account);
                break;
        }
    });
}
// Starting the application by creating a new account
var account = createAccount();
handleInput(account);
