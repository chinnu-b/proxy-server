
// This is a simple proxy server that forwards all requests to the target server.

const http = require('http');

const proxy = require('http-proxy');


const proxyServer = proxy.createProxyServer({});

const targetServer = 'http://localhost:4000';

const server = http.createServer((req, res) => {
    proxyServer.web(req, res, { target: targetServer }, (err) => {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Something went wrong.');
    });
});

server.listen(2024, () => console.log('Proxy server is running on port 2024'));