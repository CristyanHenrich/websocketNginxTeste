const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(4002, () => {
  console.log('server running at http://localhost:4002');
});

server.listen(4001, () => {
  console.log('server running at http://localhost:4001');
});