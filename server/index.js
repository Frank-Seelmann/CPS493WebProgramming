/*
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("Going");
  res.end('You asked for ' + req.url);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
//----------------------------------//

const express = require('express')
const app = express()
const port = 3000

app
.get('/', (req, res) => {
  res.send('Hello World!')
})
.get('/newpaltz', (req,res) => {
  res.send('Hello New Paltz!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})