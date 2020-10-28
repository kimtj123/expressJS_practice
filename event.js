const EventEmitter = require('events');

const myEvent = new EventEmitter();

// addListener와 on은 기능이 같다.
// 둘 다 이벤트명에 콜백을 연결해주는 기능을 함
myEvent.addListener('event1', () => console.log('event 1'));
myEvent.on('event2', () => console.log('event 2'));
myEvent.on('event2', () => console.log('event 2 추가'));

// emit(이벤트명) 이벤트를 호출하는 메소드
myEvent.emit('event1');
myEvent.emit('event2');

// once 는 한 번만 실행됨, 뒤에서 event3 를 두 번 호출했지만 실행되지 않음
myEvent.once('event3', () => {
    console.log('event 3');
})

myEvent.emit('event3');
myEvent.emit('event3');

// removeAllListeners 이벤트에 연결된 모든 리스너 제거
myEvent.on('event4', () => console.log('event4'));
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {console.log('event 5');}

myEvent.on('event5', listener);
myEvent.removeAllListeners('event5', listener);
myEvent.emit('event5');

// listenerCount 리스너 연결갯수 표시
console.log(myEvent.listenerCount('event2'));