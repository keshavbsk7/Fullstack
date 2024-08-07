const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/count') {
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      const message = data.trim();
      const wordCount = message.split(/\s+/).length;
      const charCount = message.length;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ wordCount, charCount }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3017;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});