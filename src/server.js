import express from 'express'
import path from 'path'
import {port} from './config'

const server = express();

server.get('/', (req, res) => res.sendFile(path.join(__dirname, require('file-loader!./client/index.html'))));
server.get('/bundle.js', (req, res) => res.sendFile(path.join(__dirname, 'public', 'main.js')));

server.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});
