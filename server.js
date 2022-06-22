const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  
 
  //Headers: {Type: Header}
  response.write(`Method: ${request.method}\n`);
  
  response.write(`Headers: ${JSON.stringify(request.headers)}\n`);
  response.write(`Path: ${request.url}\n`);
response.write(`Host: ${request.headers.host}\n`)
  response.end();

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
