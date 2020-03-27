const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when FE connects

io.on('connection', (socket) => {
	console.log('Connection Made');
});

const PORT = 3000 || process.env.PORT;
app.listen();

server.listen(PORT, () => console.log(`Server Running on ${PORT}`));
