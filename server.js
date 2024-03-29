const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    const porta = socket.handshake.query.porta;
    console.log('Conexão WebSocket estabelecida na porta:', porta);
});

app.get('/', (req, res) => {
    //capturar a porta do cliente que está acessando a rota
    const porta = req.headers.host.split(':')[1];
    console.log('Conexão HTTP estabelecida na porta:', porta);
    res.send('Hello World');
});

server.listen(4001, () => {
    console.log('server running at http://localhost:4001');
});

app.listen(4002, () => {
    console.log('server running at http://localhost:4002');
});