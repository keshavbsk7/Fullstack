import * as readline from 'readline';

class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(value: T): void {
        this.items.push(value);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
    print():void{
        console.log(this.items);
    }
}

async function main() {
    const stack = new Stack<number>(); 

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    while(true){
        const inp = await getinp(rl,"\nEnter choice 1 - PUSH\n2 - POP\n3 - Check\n4 - print\n5 - exit\n");
        switch(inp){
            case 1:
                const num  = await getinp(rl,"Enter the input :");
                stack.push(num);
                break;
            case 2:
                console.log(stack.pop());
                break;
            case 3:
                stack.print();
                break;
            case 4:
                console.log(stack.isEmpty());
                break;
            case 5:
                return;
            default:
                console.log("Enter valid input");
        }
    }

}

async function getinp(rl: readline.Interface, question: string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(parseInt(answer));
        });
    });
}

main();
