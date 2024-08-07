import * as readline from 'readline';

interface Book {
    title: string;
    author: string;
    publisher: string;
}

class BookImpl implements Book {
    title: string;
    author: string;
    publisher: string;

    constructor(title: string, author: string, publisher: string) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
}

class BookManager {
    rl: readline.Interface;
    books: Book[];

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.books = [];
    }

    async getInput(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    async addBook() {
        const title = await this.getInput(`Enter title for the book: `);
        const author = await this.getInput(`Enter author for the book: `);
        const publisher = await this.getInput(`Enter publisher for the book: `);

        const book: Book = new BookImpl(title, author, publisher);
        this.books.push(book);
    }

    displayBooks() {
        this.books.sort((a, b) => a.author.localeCompare(b.author));
        console.log("Books sorted by author name (ascending):");
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Publisher: ${book.publisher}`);
        });
    }

    async main() {
        const numBooksStr = await this.getInput("Enter the number of books: ");
        const numBooks = parseInt(numBooksStr);

        for (let i = 0; i < numBooks; i++) {
            await this.addBook();
        }

        this.rl.close();
        this.displayBooks();
    }
}

const bookManager = new BookManager();
bookManager.main();
