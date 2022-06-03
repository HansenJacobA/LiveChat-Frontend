const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
  },
});

let guestCounter = 1;
const usernames = {};
const storage = [];

io.on('connection', (socket) => {
  const { id } = socket;

  socket.on('send-message', (message) => {
    if (usernames[id] !== undefined) {
      const name = usernames[id];
      storage.push({ name, message });
      io.emit('stored-messages', storage);
    }
  });

  socket.on('upload-messages', () => {
    io.emit('stored-messages', storage);
  });

  socket.on('make-name', (name) => {
    if (usernames[id] === undefined) {
      if (name === id) {
        usernames[id] = `guest${guestCounter}`;
        guestCounter += 1;
      } else {
        usernames[id] = name;
      }
    }
  });
});
