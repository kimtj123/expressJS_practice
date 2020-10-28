const buffer = Buffer.from('change to buffer');
console.log('from() : ', buffer);
console.log('length : ', buffer.length);
console.log('toString() : ', buffer.toString());

const array = [Buffer.from('blank'), Buffer.from('blank'), Buffer.from('blank!!')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(100);
console.log('alloc():', buffer3);