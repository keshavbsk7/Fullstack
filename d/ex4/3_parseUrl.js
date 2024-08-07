const url = require('url');

const urlStr = 'https://www.example.com:8080/path?query=string#fragment';

const parsedUrl = url.parse(urlStr, true)

console.log('Protocol: ',parsedUrl.protocol)
console.log('Hostname: ',parsedUrl.hostname, parsedUrl.host)
console.log('Port: ',parsedUrl.port)
console.log('Path: ',parsedUrl.pathname, parsedUrl.path)
console.log('Query: ',parsedUrl.query)
console.log('Fragment: ',parsedUrl.hash)