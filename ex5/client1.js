const net = require("net");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.connect({port: 8884}, function() {
    console.log('Connected to Server. You can start chatting.');
});

client.on('data', function(data) {
    console.log(data.toString());
});

client.on('end', function() {
    console.log('Disconnected from server.');
    process.exit(); 
});

rl.on('line', function(input) {
    if (input === "end") {
        client.end();
    } else {
        client.write(input); 
    }
});

console.log('Client Program Ended using enter = end ');

