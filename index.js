const express = require('express');
const router = require('./router');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const { addUser, removeUser, getUser, getUserInRoom } = require('./users');

const app = express();
app.use(router);
app.use(cors());

// Initialize HTTP server
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});

// Set socket io
const io = socketio(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

io.on('connection', (socket) => {
    console.log('We have a new connection!!!');

    socket.on('join', ({ avatar, name, room }, callback) => {
        console.log(avatar, name, room);
        const { error, user } = addUser({ id: socket.id, avatar, name, room });
        if (error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}!` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!` });
        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { avatar: user.avatar, user: user.name, text: message });
        callback();
    });

    socket.on('disconnect', () => {
        console.log('User had left!!!');
        const user = removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left!` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) });
        }
    });
});
