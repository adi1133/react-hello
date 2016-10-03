import express from "express";
import path from "path";
import {port} from "./config";

const server = express();

server.get('/bundle.js', (req, res) => res.sendFile(path.join(__dirname, 'public', 'main.js')));
server.use((req, res) => res.sendFile(path.join(__dirname, require('file-loader!./client/index.html'))));


server.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});


setTimeout(function () {
    throw "Will I restart?"
}, 10000);