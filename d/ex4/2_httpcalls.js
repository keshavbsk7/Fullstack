const http = require('http');

const options = {
    host: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts/1'
};

const url = 'http://jsonplaceholder.typicode.com/posts/1';

http.get(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
}).on('error', (error) => {
    console.log('Error:'+error.message);
});
