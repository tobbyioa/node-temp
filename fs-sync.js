const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./contents/first.txt','utf-8');
const second = readFileSync('./contents/second.txt','utf-8');

console.log(first, second);

writeFileSync(
    '/contents/result-sync.txt',
    `This is the result: ${first} - ${second}`,
    {flag: 'a'}
    );