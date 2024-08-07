import * as readline from 'readline';

class Employee {
    public name: string;
    public hoursWorked: number;
    public hourlyRate: number;

    constructor(name: string, hoursWorked: number, hourlyRate: number) {
        this.name = name;
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    calculatePay(): number {
        return this.hoursWorked * this.hourlyRate;
    }
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter employee name: ", (name) => {
        rl.question("Enter hours worked: ", (hoursWorkedStr) => {
            const hoursWorked = parseFloat(hoursWorkedStr);
            rl.question("Enter hourly rate: ", (hourlyRateStr) => {
                const hourlyRate = parseFloat(hourlyRateStr);

                const employee = new Employee(name, hoursWorked, hourlyRate);
                const pay = employee.calculatePay();

                console.log(`Employee: ${name}`);
                console.log(`Hours Worked: ${hoursWorked}`);
                console.log(`Hourly Rate: rs${hourlyRate}`);
                console.log(`Pay: rs${pay}`);

                rl.close();
            });
        });
    });
}

main();
