const path = require('path');

const absolute =  path.resolve(__dirname,'content','testtxt','testfile.txt')

console.log(absolute);
console.log(path.basename(absolute));