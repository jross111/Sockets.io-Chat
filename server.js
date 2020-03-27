import { join } from 'path';
import { createServer } from 'http';
import express, { static } from 'express';
import socketio from 'socket.io';

const app = express();
const server = createServer(app);
const io = socketio(server);

// Set static folder
app.use(static(join(__dirname, 'public')));

// Run when FE connects

io.on('connection', (socket) => {
	console.log('Connection Made');
});

const PORT = 3000 || process.env.PORT;
app.listen();

server.listen(PORT, () => console.log(`Server Running on ${PORT}`));
