// const _ = require('lodash');
// const items = [1,[2,[3,[4]]]];
// const newItems = _.flattenDeep(items);

// console.log(newItems);
// console.log('hello Guys'); 
// const {readFile} = require('fs');
// console.log('Execution started');
// readFile('./contents/first.txt','utf-8',(err,data)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     console.log('Execution completed');
// });

// console.log('Execution continues');

// console.log('first');
// setTimeout(() =>{
//     console.log('second');
// })
// console.log('third');

// setInterval(() =>{
//  console.log('fourth');
// },2000);
// console.log('fifth');

const http = require('http');

const httpServer =  http.createServer((req,res)=>{
    console.log(`request from.... ${req.url}`);
    res.end('Hello World');
});

httpServer.listen(3000,()=>{
    console.log('Server is listening on port 3000.....');
});








