"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Employee = /** @class */ (function () {
    function Employee(name, hoursWorked, hourlyRate) {
        this.name = name;
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }
    Employee.prototype.calculatePay = function () {
        return this.hoursWorked * this.hourlyRate;
    };
    return Employee;
}());
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter employee name: ", function (name) {
        rl.question("Enter hours worked: ", function (hoursWorkedStr) {
            var hoursWorked = parseFloat(hoursWorkedStr);
            rl.question("Enter hourly rate: ", function (hourlyRateStr) {
                var hourlyRate = parseFloat(hourlyRateStr);
                var employee = new Employee(name, hoursWorked, hourlyRate);
                var pay = employee.calculatePay();
                console.log("Employee: ".concat(name));
                console.log("Hours Worked: ".concat(hoursWorked));
                console.log("Hourly Rate: $".concat(hourlyRate));
                console.log("Pay: $".concat(pay));
                rl.close();
            });
        });
    });
}
main();
