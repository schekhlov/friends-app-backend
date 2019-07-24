const express = require('express');
const friends = require('./services/friends');
const app = express();
const server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('get friends', async (userId) => {
    console.log('Get friends, userId:', userId);
    const data = await friends.getById(userId);
    socket.emit('friends', userId, data);
  });
});

server.listen(process.env.PORT, () =>
  console.log('Socket.io listening on:', process.env.PORT),
);