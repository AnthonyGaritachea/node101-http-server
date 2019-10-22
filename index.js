const http = require('http');

const server = http.createServer((req, res) => {
    // log a messge when request is received
    console.log(`Received ${req.method} request for: ${req.url}`);
    // send headers
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // send body response
    res.end('Hello World');
})

// listen for incoming connection
server.listen(8080, 'localhost', null, function(){
    // log a msg that the server is listenting and port
    console.log('Server is listening on localhost:8080')
});

