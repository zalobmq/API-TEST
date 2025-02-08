const http = require('http');

const server = http.createServer((req , res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('HOLA MUNDO');
    res.end();
});

const port = 3000;
server.listen (port, () => {
    console.log('Server running')
});