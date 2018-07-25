const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

http.listen(2000, () => {
  console.log('Сервер слушает порт 2000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.once('connection', (socket) => {
  console.log("connected!");
});

io.on('connection', (socket) => {
  socket.emit("reboot", "Привет из Сокет-сервера");
  console.log("reboot");
});
