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
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var books = [];
function getInput(question) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question(question, function (answer) {
                        resolve(answer);
                    });
                })];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var numBooksStr, numBooks, i, title, author, publisher, book;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInput("Enter the number of books: ")];
                case 1:
                    numBooksStr = _a.sent();
                    numBooks = parseInt(numBooksStr);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < numBooks)) return [3 /*break*/, 7];
                    return [4 /*yield*/, getInput("Enter title for book ".concat(i + 1, ": "))];
                case 3:
                    title = _a.sent();
                    return [4 /*yield*/, getInput("Enter author for book ".concat(i + 1, ": "))];
                case 4:
                    author = _a.sent();
                    return [4 /*yield*/, getInput("Enter publisher for book ".concat(i + 1, ": "))];
                case 5:
                    publisher = _a.sent();
                    book = { title: title, author: author, publisher: publisher };
                    books.push(book);
                    _a.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 2];
                case 7:
                    rl.close();
                    // Sort books by author name in ascending order
                    books.sort(function (a, b) { return a.author.localeCompare(b.author); });
                    // Display information of books in a list
                    console.log("Books sorted by author name (ascending):");
                    books.forEach(function (book) {
                        console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Publisher: ").concat(book.publisher));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main();
