const http = require('http');
const fs = require('fs');
// const util = require('util');
// const promise = require('promise')

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((response, request) => {
//   request.statusCode = 200;

//   request.setHeader('Content-Type', 'text/html');
//   fs.readFile('./src/index.html', 'utf8', (err, data) => {
//     if (err) throw err;

//     request.write(data, 'utf8');
//     request.end();
//   });
// });

const ss = util.promisify(http.createServer);
ss((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
}).then(element => {
  console.log(element);
});

function ser(func) {
  return new Promise((request, resp) => {
    http.createServer(func);
  });
}
ser();
// const server = http.createServer();

// server.on('request', (request, response) => {
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/html');
function f(path, coding) {
  return new Promise((res, reg) => {
    fs.readFile(path, coding, (err, data) => {
      if (err) {
        reg();
      }
      res(data);
    });
  });
}

f('./src/index.html', 'utf8').then(param => {
  response.write(param, 'utf8');

  response.end();
});
//     .then(() => {});
// });
ss.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const c = JSON.stringify(server);

// fs.writeFile('./src/write.txt', c, err => {
//   if (err) {
//     console.log('fsdfs');
//   }
// });

fs.readFile('./src/write.txt', 'utf8', (err, data) => {
  fs.writeFile('./src/new.txt', data, exp => {
    if (exp) {
      console.log('dfsfdsf');
    }
  });
});
