import express from 'express'
import path from 'path'
import {port} from './config'

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});
