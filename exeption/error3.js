process.on('uncaughtException', (err) => { 
    console.error('예기치 못한 에러', err);
});

setInterval(() => {throw new Error('server is not working')}, 1000);
setTimeout(() => {console.log('실행됩니다.')}, 2000);
setTimeout(() => {process.exit();}, 2000);

