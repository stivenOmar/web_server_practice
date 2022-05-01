const dontenv = require('dotenv');
dontenv.config();

const Server = require('./Models/Server');
const server = new Server();

server.listen();