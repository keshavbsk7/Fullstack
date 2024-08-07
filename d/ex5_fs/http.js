const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    

    req.on('data', (chunk) => {
      data += chunk;
    });
    console.log(data)
    req.on('end', () => {
      const parsedData = data;
      

      const wordCount = countWords(parsedData);
      const charCount = parsedData.length;

      const output = { wordCount, charCount };

      
      fs.writeFileSync('output.json', JSON.stringify(output, null, 2));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(output));
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}

//curl -X POST -d "message=dharun" http://localhost:3000