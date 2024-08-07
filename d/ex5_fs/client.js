const net = require("net");

const client = net.connect({ port: 8080 }, 'localhost', function () {
    console.log('Connected to Server.');

    process.stdin.on('data', function (data) {
        if (data.toString().trim().toLowerCase() === 'exit') {
            console.log('Exiting client...');
            client.end();
        } else {
            client.write(data);
        }
    });
});

client.on('data', function (data) {
    console.log('Server says:', data.toString());
});

client.on('end', function () {
    console.log('Disconnected from server.');
    process.exit(); 
});

client.on('error', function (err) {
    console.error('Error:', err.message);
    process.exit(1); // Exit the client process with an error code
});

process.on('SIGINT', function () {
    console.log('Client shutting down...');
    client.end();
    process.exit();
});

console.log('Client Program Ended.');
