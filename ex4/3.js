const url = require('url');


const urlString = 'https://www.example.com:8080/path?param1=value1&param2=value2#fragment';

const parsedUrl = url.parse(urlString, true);

console.log('Parsed URL:');
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Hostname:', parsedUrl.hostname);
console.log('Port:', parsedUrl.port);
console.log('Path:', parsedUrl.pathname);
console.log('Query:', parsedUrl.query);
console.log('Fragment:', parsedUrl.hash);
