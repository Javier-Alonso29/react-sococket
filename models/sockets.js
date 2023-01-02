class Sockets{

    constructor(io){
        this.io = io

        this.socketEvents()
    }

    socketEvents(){
        this.io.on('connection', ( socket ) => { 
            
            socket.on('message-to-server', (data) => {
                console.log(data);
        
                // Si lo hacemos solo como socket.emit() va a enviar la data unicamente al cliente que disparo el mensaje message-to-server
        
                // Si lo hacemos con io.emit va a enviar la data a todos los clientes conectados en el mismo namespace 
                this.io.emit('message-from-client', data)
            })

        });
    }

}

module.exports = Sockets;