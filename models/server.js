//Servidor de express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Http Server
        this.server = http.createServer(this.app)
        
        // Sockets
        this.io = socketio(this.server, {/* Configurations */})
    }

    socketConfigurations(){
        new Sockets(this.io)
    }

    middlewares(){
        this.app.use(express.static( path.resolve(__dirname, '../public') ))
    }

    execute(){

        this.middlewares();

        this.socketConfigurations();

        this.server.listen(this.port, () => {
            console.log('Server corriendo en', this.port);
        });
    }
}

module.exports = Server