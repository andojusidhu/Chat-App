// import React from 'react'
// import io from 'socket.io-client'
// import Chat from './Chat.js'
// import {useState} from "react"
// const socket =io.connect("http://localhost:3003")
// const App = () => {
//   const [Username, setUsername] = useState("")
//   const [room, setroom] = useState("")
//   const [showChat, setshowChat] = useState(false)
//   const joinRoom =()=>{
//       if(Username!=="" && room!=="")
//       {
//           socket.emit("join_room",room)
//           setshowChat(true);
//       }
//   }
//   return (
//     <div className='App'>
//       {!showChat ? (
//       <h3>Join chat</h3>
//       <input type="text" placeholder="john......" onChange={(event)=>{setUsername(event.target.value)}}/>
//       <input type="text" placeholder="room id..." onChange={(event)=>{setroom(event.target.value)}}/>
//       <button onClick={joinRoom}>Join Room</button>
//       )
//       :(
//       <Chat socket={socket} Username={Username} room={room} />
//       )}
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';
import io from 'socket.io-client';
import Chat from './Chat'; // Make sure this file exists
import "./App.css"
// Connect to backend server (update port if needed)
const socket = io.connect("http://localhost:3003");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        
        <div className="joinChatContainer">
          <h3>Join Chat</h3>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {setUsername(e.target.value)}}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Enter Room ID" onChange={(event)=>{setRoom(event.target.value)}}  />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
    
  );
};

export default App;
