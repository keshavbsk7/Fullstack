const net = require("net");

let client = null;

const server = net.createServer(function (connection) {
    console.log('Client connected.');
    client = connection;



    connection.on('end', function () {
        console.log('Client disconnected.');
        client = null;
    });

    connection.on('data', function (data) {
        console.log('Client says:', data.toString());
    });

    connection.on('error', function (err) {
        console.error('Error:', err.message);
        
        connection.destroy();
    });
});

server.listen(8080, function () {
    console.log('Server is listening.');

});



process.stdin.on('data', function (data) {
    if (client) {

        client.write(data);
    } else {
        console.log('No client connected.');
    }
});

process.on('SIGINT', function () {
    console.log('Server shutting down...');
    if (client) {
        client.end();
    }
    server.close();
    process.exit();
});


