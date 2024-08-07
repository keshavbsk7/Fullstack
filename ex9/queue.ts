import * as readline from 'readline';

class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(value: T): void {
    this.items.push(value);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  print(): void {
    console.log("Queue:", this.items);
  }
}

async function getUserInput(prompt: string): Promise<string> {
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

async function main() {
    const queue = new Queue<number>();

    while (true) {
        console.log("Options:");
        console.log("1. Enqueue");
        console.log("2. Dequeue");
        console.log("3. Exit");

        const option = await getUserInput("Enter option number: ");

        switch (option) {
            case '1':
                const value = await getUserInput("Enter a number to enqueue: ");
                const num = parseInt(value);
                if (!isNaN(num)) {
                    queue.enqueue(num);
                    console.log(`${num} enqueued.`);
                } else {
                    console.log("Invalid number. Please enter a valid number.");
                }
                break;
            case '2':
                const dequeued = queue.dequeue();
                if (dequeued !== undefined) {
                    console.log(`${dequeued} dequeued.`);
                } else {
                    console.log("Queue is empty. Nothing to dequeue.");
                }
                break;
            case '3':
                console.log("Exiting the program.");
                return;
            default:
                console.log("Invalid option. Please enter 1, 2, or 3.");
        }
        queue.print();
    }
}

main();
