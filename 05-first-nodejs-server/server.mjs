// server.mjs
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const server = createServer((req, res) => {``
  console.log('Received request:', req.method, req.url);
  if(req.url === '/users') {
    // some data: from db, from a file, from an API...
    // const users = [
    //     { firstName: 'John', lastName: 'Doe', email: ''},
    //     { firstName: 'Alice', lastName: 'Smith', email: ''},
    // ];

    // read from a file
    const fileContent = readFileSync('./users.json', 'utf-8');
    // const users = JSON.parse(fileContent);

    // fake logic to simulate an error or not
    if(!fileContent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
    }
    // if no error, send the data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // JSON parse
    res.end(fileContent); // /!\ a finaliser
  } else if(req.url === '/users?format=html') {
    const fileContent = readFileSync('./users.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fileContent);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`