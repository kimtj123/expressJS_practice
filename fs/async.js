const fs = require('fs');

console.log('start');

// fs.readFile('./readme.txt',(err,data) => {
//     if(err) {
//         throw err;
//     }
//     console.log('1번', data.toString());
// })

// fs.readFile('./readme.txt',(err,data) => {
//     if(err) {
//         throw err;
//     }
//     console.log('2번', data.toString());
// })

// fs.readFile('./readme.txt',(err,data) => {
//     if(err) {
//         throw err;
//     }
//     console.log('3번', data.toString());
// })

let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());

console.log('끝');