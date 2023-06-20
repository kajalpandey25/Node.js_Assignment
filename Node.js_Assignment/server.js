// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });


// const http = require('http');
// const events = require('events');

// const emitter = new events.EventEmitter();

// emitter.on('subscribe', () => {
//   console.log('User subscribed!');
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Server running');
//   emitter.emit('subscribe');
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// const http = require('http');
// const events = require('events');

// const emitter = new events.EventEmitter();

// const subscribeHandler = () => {
//   console.log('User subscribed!');
// };

// emitter.on('subscribe', subscribeHandler);

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Server running');
//   emitter.emit('subscribe');
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// emitter.removeListener('subscribe', subscribeHandler);

const http = require('http');
const events = require('events');

const emitter = new events.EventEmitter();

const subscribeHandler = () => {
  console.log('User subscribed!');
};

emitter.on('subscribe', subscribeHandler);

const maxListenersCount = events.EventEmitter.defaultMaxListeners;
console.log('Current maximum number of event listeners:', maxListenersCount);

emitter.setMaxListeners(5);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server running');
  emitter.emit('subscribe');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


