import React, { useState, useEffect } from 'react';
import '../css/UserList.css'; 
import socketIOClient from 'socket.io-client';
import DataUsers from '../dataUsers.json';
// import PersistentDrawerLeft from './SideBarr'
import Footer from './footer/Footer';
import Navbar from './Navbar';
const ENDPOINT = 'http://localhost:3001';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => socket.disconnect();
  }, []);

  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
  };

  const sendMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      content: messageInput,
      timestamp: new Date().toLocaleString(),
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessageInput('');

    // Emit message to the server
    const socket = socketIOClient(ENDPOINT);
    socket.emit('message', newMessage);
  };

  return ( <div>
    <Navbar/>
      <div className="chat-container">

      <div className="sidebar">
        {/* <PersistentDrawerLeft/> */}
        <div className="search-bar">
          <input type="text" placeholder="Search for message" />
        </div>
        <div className="recent-chats">
          {DataUsers.users.map(user => (
            <div key={user.id}>
              <p>{user.name}</p>
              <h6>{user.msg}</h6>
            </div>
          ))}
       
        </div>
      </div>

      <div className="chat-area">
        <header className="chat-header">
    
          <h2>Jone Martin</h2>
          <span className="status">Online</span>
        </header>
        <div className="message-history">

          {messages.map(message => (
            <div className={`message ${message.sender === 'You' ? 'sent' : 'received'}`} key={message.id}>
              <div className="message-info">
                <span className="sender">{message.sender}</span>
                <span className="timestamp">{message.timestamp}</span>
              </div>
              <p className="content">{message.content}</p>
            </div>
          ))}
        </div>
        <div className="message-input-area">
          <input type="text" placeholder="Type a message..." value={messageInput} onChange={handleMessageChange} />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
    <Footer/> 
    </div>
  );
}

export default Chat;
