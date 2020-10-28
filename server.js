const http = require('http');
const port = 3000;

const server = http.createServer((req,res) => {
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Server</p>');
})

server.listen(port);

server.on('listening', ()=>{
    console.log(`${port}번 포트에서 서버 대기중입니다!`);
})

server.on('error', (err) => {
    console.error(err);
});