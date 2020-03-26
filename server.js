import { join } from 'path';
import http from 'http';
import express, { static } from 'express';

const app = express();

// Set static folder
app.use(express.static(join(__dirname, 'public')));

const PORT = 3000 || process.env.PORT;
app.listen();

server.listen(PORT, () => console.log(`Server Running on ${PORT}`));
