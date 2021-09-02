const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
       origin: "http://localhost:3000",
       methods: ["GET", "POST"],
       credentials: true
     }
   });

io.on('connection', (socket) => {
    console.log(`client ${socket.id} connected to socket.io server`);
    socket.on('sendMessage', (text) => {
      io.emit('addMessage', text);
    });
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});