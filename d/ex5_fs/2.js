var http = require('http');
const message="hi i am dharun"
var options = {
	host: 'localhost', port: '3000',method:'POST',
	headers:{
		'Content-Type':'text/plain',
		'Content-Length':Buffer.byteLength(message)
	}
};
var callback = function (response) {                 // callback function is used to deal with response
	var body = '';
	response.on('data', function (data) {
		body += data;
	});
	response.on('end', function () {
		console.log(body);
	});
	response.on('error', (error) => {
		console.error(error);
	});
};
var req = http.request(options, callback);
req.write(message);
req.end();
