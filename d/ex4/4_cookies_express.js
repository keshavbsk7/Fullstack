const http = require('http');

const server = http.createServer((req, res) => {

  const cookies = req.headers.cookie;


  if (cookies) 
  {
   const cookieArray = cookies.split(';');

   
    cookieArray.forEach(cookie => {
      console.log('Cookie:', cookie.trim());
    });

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Cookies received. Check the console for details.\n');
  } 
  else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('No cookies received.\n');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


//curl -X GET http://localhost:3000 -H "Cookie: cookie1=dharun;