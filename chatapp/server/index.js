// const express =require('express')
// const app=express();
// const http=require('http');
// const cors=require('cors');
// const {Server}=require("socket.io");
// app.use(cors())
// const server=http.createServer(app);
// const io=new Server(server,{
//     cors :{
//         origin:"http://localhost:3000",
//         methods:["GET","POST"],
//     },
// })
// io.on("connection",(socket)=>{
//     console.log(socket.id);
//     socket.on("disconnect",()=>{
//         console.log("user disconnected",socket.id);
//     })
// })

// server.listen(3001,()=>{
//     console.log('server running');
// })
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io");

app.use(cors());

// Create server first
const server = http.createServer(app);

// Then use it for socket.io
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log(`User with ID ${socket.id} joined room :${data}`)
    })

    socket.on("send_msg",(data)=>{
        socket.to(data.room).emit("received_msg",data)
    })
    
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});
const port=3003
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
