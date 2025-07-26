import React, { useEffect } from 'react'
import { useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
const Chat = ({socket,username,room}) => {
    const [currentMsg, setcurrentMsg] = useState("")
    const [Msglist, setMsglist] = useState([])
    const sendMsg=async ()=>{
        if(currentMsg!=="")
        {
            const msgdata={
                room:room,
                author:username,
                message:currentMsg,
                time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
            };
            await socket.emit("send_msg",msgdata)
            setMsglist((list)=>[...list,msgdata])
            setcurrentMsg("")
        }
        
    };
    useEffect(()=>{ 
            socket.on("received_msg",(data)=>{
                setMsglist((list)=>[...list,data]);
            })
        },[socket]);
    return (
    <div className='chat-window'>
        <div className='chat-header'>
            <p>Live Chat</p>
        </div>
        <div className='chat-body'>
            <ScrollToBottom className='message-container'>
                {Msglist.map((msg) => {
                return(
                    <div className='message' id={username===msg.author ? "you" : "other"}>
                    <div>
                        <div className='message-content'>
                            <p>{msg.message}</p>
                        </div>
                        <div className='message-meta'>
                            <p id='time'>{msg.time}</p>
                            <p id='author'>{msg.author}</p>
                        </div>
                    </div>
                </div>
                )
            }
                
            )};
            </ScrollToBottom>
        </div>
        <div className='chat-footer'>
            <input type='text' value={currentMsg} placeholder='Heyy...' onChange={(event)=>{setcurrentMsg(event.target.value)}} onKeyPress={(event)=>{event.key ==="Enter" && sendMsg();}}/>
            <button onClick={sendMsg}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat