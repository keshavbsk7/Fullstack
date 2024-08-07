class BankAccount {
    private balance: number;
    private accountHolder: string;
  
    constructor(accountHolder: string, initialBalance: number = 0) {
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
    }
    credit(amount: number): void {
      this.balance += amount;
      console.log(`Credited ${amount} to ${this.accountHolder}'s account. New balance: ${this.balance}`);
    }  
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.accountHolder}'s account. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds to withdraw ${amount} from ${this.accountHolder}'s account.`);
      }
    }  
    checkBalance(): void {
      console.log(`Balance for ${this.accountHolder}'s account: ${this.balance}`);
    }
  }  
  const menu = `
  Bank Account Operations Menu:
  1. Credit funds
  2. Withdraw funds
  3. Check balance
  4. Exit
  `;
  function createAccount(): BankAccount {
    const readlineSync = require('readline-sync');
    const accountHolder = readlineSync.question('Enter account holder name: ');
    const initialBalance = parseFloat(readlineSync.question('Enter initial balance: '));
    return new BankAccount(accountHolder, initialBalance);
  }
  function handleInput(account: BankAccount): void {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    console.log(menu);
  
    readline.question('Enter your choice: ', (choice: string) => {
      switch (choice) {
        case '1':
          readline.question('Enter amount to credit: ', (amount: string) => {
            account.credit(parseFloat(amount));
            readline.close();
            handleInput(account);
          });
          break;
        case '2':
          readline.question('Enter amount to withdraw: ', (amount: string) => {
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
  const account = createAccount();
  handleInput(account);
  