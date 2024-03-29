const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
    const porta = req.url.split('/')[1];
    console.log('Conexão WebSocket estabelecida na porta:', porta);

    ws.send(`Bem-vindo! Você está conectado na porta ${porta}.`);
});

server.listen(4001, function() {
    console.log('Servidor WebSocket está ouvindo na porta 4001.');
});
