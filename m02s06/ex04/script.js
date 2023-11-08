const { readFileSync } = require('fs');
const dataOne = readFileSync('./another.txt', 'utf-8');
const dataTwo = readFileSync('./my-file.txt', 'utf-8');
const dataTree = readFileSync('./dir/this-other-file.txt', 'utf-8');
message = dataOne + ' ' + dataTwo + ' ' + dataTree + '!';
console.log(message);
