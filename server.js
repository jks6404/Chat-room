// importing express
const express = require('express');

// Sets up our express -> express allows us to create a server
const app = express();

// making a server using http and express
const server = require('http').Server(app);

// giving public folder to my express app
app.use(express.static('public'));

// importing socket.io and linking it with server
const io = require('socket.io')(server);

io.on('connection', (socket)=>{
    console.log('connection established', socket.id);
    // triggering on 'message' event
    socket.on('message',(data)=>{ // user is sending message
        // giving that message to io
        io.emit('message',data); // emitting this message to
        // all other sockets
    })
    socket.on('disconnect',()=>{
        console.log('user left the chat');
    })
})

// this is port on which oir server will run
const PORT = 9000;
server.listen(PORT,()=>{
    console.log(`Server is run on PORT ${9000}`);
})