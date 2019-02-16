const net = require('net');

const port = 7070;
const host = '127.0.0.1';

const server = net.createServer();
server.listen(port, host, () => {
  console.log('TCP Server is running on port ' + port +'.');
});

server.on('connection', function(sock) {
  console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
});