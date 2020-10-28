const http = require('http');
const fs = require('fs');
const port = 3001;


const server = http.createServer((req,res) => {
    fs.readFile('./server2.html', (err, data) => {
        if(err) {
            throw err;
        }
        res.end(data);
    });
})

server.listen(port, () => {
    console.log(`${port}번 포트에서 서버 대기 중입니다.`);
});