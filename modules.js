const Log = require('./logger');
const path = require('path');
const os =  require('os');

const fs =  require('fs');

const EventEmmiter  = require('events');
const http = require('http');
const server = http.createServer((req,res) =>{
    if(req.url ==='/'){
        res.write('Hello from server');
        res.end();
    }
    if(req.url ==='/api/states'){
        res.write(JSON.stringify(['Oyo','Ogun','Osun', 'Ondo','Lagos']))
        res.end();
    }
});
server.listen(4040);

// server.on('connection',(socket) =>{
//  console.log('New connection');
// });
const logger = new Log();

logger.on('messageLogged',(args) =>{
    console.log(`Listner Called`,args);
   });

logger.log('Hello');
logger.log('Listening on port 4040....');

//log(`dir: ${fs.readdirSync('./')}`);
// fs.readdir('./',function(err, files){
// if(err){
//     log(`Error: ${err}`);
// }else{
//     log(`Files: ${files}`);
// }
// })
//log(`Total Memory: ${os.totalmem()}`);
//log(`Free Memory: ${os.freemem()}`);

//log(pathObj);
