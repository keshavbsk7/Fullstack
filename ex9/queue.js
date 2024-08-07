"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.items.push(value);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.print = function () {
        console.log("Queue:", this.items);
    };
    return Queue;
}());
function getUserInput(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        var rl;
        return __generator(this, function (_a) {
            rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question(prompt, function (answer) {
                        rl.close();
                        resolve(answer);
                    });
                })];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var queue, option, _a, value, num, dequeued;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    queue = new Queue();
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 9];
                    console.log("Options:");
                    console.log("1. Enqueue");
                    console.log("2. Dequeue");
                    console.log("3. Exit");
                    return [4 /*yield*/, getUserInput("Enter option number: ")];
                case 2:
                    option = _b.sent();
                    _a = option;
                    switch (_a) {
                        case '1': return [3 /*break*/, 3];
                        case '2': return [3 /*break*/, 5];
                        case '3': return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 7];
                case 3: return [4 /*yield*/, getUserInput("Enter a number to enqueue: ")];
                case 4:
                    value = _b.sent();
                    num = parseInt(value);
                    if (!isNaN(num)) {
                        queue.enqueue(num);
                        console.log("".concat(num, " enqueued."));
                    }
                    else {
                        console.log("Invalid number. Please enter a valid number.");
                    }
                    return [3 /*break*/, 8];
                case 5:
                    dequeued = queue.dequeue();
                    if (dequeued !== undefined) {
                        console.log("".concat(dequeued, " dequeued."));
                    }
                    else {
                        console.log("Queue is empty. Nothing to dequeue.");
                    }
                    return [3 /*break*/, 8];
                case 6:
                    console.log("Exiting the program.");
                    return [2 /*return*/];
                case 7:
                    console.log("Invalid option. Please enter 1, 2, or 3.");
                    _b.label = 8;
                case 8:
                    queue.print();
                    return [3 /*break*/, 1];
                case 9: return [2 /*return*/];
            }
        });
    });
}
main();
