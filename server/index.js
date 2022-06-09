const express = require('express');

const app = express();
const httpServer = require('http').createServer(app);
// const { Server } = require('socket.io');

// const io = new Server(httpServer);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
  },
});

const cors = require('cors');

app.use(cors());

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

httpServer.listen(3000, () => console.log('listening on port 3000'));
