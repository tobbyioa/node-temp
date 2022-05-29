const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.write('Welcome to our homepage');
        res.end();
    }
    if(req.url === '/about'){
        res.write('Welcome to our short history');
        res.end();
    }
    res.end('<h1>The End</h1>');
});

server.listen("4040");