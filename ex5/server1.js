const net = require("net");
const readline = require('readline');

const clients = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const server = net.createServer(function(socket) {
    console.log('Client connected.');

    clients.push(socket);

    socket.on('data', function(data) {
        console.log('Client: ' + data.toString());
        broadcast(data, socket);
    });

    socket.on('end', function() {
        console.log('Client disconnected.');
        clients.splice(clients.indexOf(socket), 1);
    });
});

function broadcast(message, sender) {
    clients.forEach(function(client) {
        if (client !== sender) {
            client.write(message);
        }
    });
}

server.listen(8884, function() {
    console.log('Server is listening on port 8884.');
    rl.on('line', function(input) {
        if (input === "end") {
            server.close();
            process.exit(); 
        } else {
            broadcast("Server: " + input + "\n");
        }
    });
});

console.log('Server Program Ended using enter = end ');
