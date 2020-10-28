// process.env

// process.env.SECRET_ID = 0;
// process.env.SECRET_CODE = '123f32awefew';

// const secredId = process.env.SECRET_ID;
// const secredCode = process.env.SECRET_CODE;

// console.log("secredId :: ", secredId);
// console.log("secredCode :: ", secredCode);

setImmediate(() => {
    console.log('immediate');
})

process.nextTick(() => {
    console.log('nextTick');
})

setTimeout(()=>{
    console.log('timeout');
},0);

Promise.resolve().then(() => console.log('promise'));