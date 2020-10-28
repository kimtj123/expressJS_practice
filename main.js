const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World");
}).listen(8081);

let events = require('events');

// EventEmitter 객체 생성
let eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
let connectHandler = function connected() {
    console.log("Connection Successful");

    // data_recevied 이벤트를 발생시키기
    eventEmitter.emit("data_received");
}

// connection 이벤트와 connectHandler 이벤트 핸들러를 연동
eventEmitter.on('connection', connectHandler);

//data_received 이벤트와 익명 함수와 연동
// 함수를 변수에 담는 대신 .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('data_received', ()=>{
    console.log("Data Received");
});

// connection 이벤트 발생시키기
eventEmitter.emit('connection');

console.log("Program has ended");
console.log("Server running at http://127.0.0.1:8081");