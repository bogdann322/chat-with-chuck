import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import ChatPage from './Components/ChatPage/ChatPage';
import LeftBar from './Components/LeftBar/LeftBar';
import NoChat from './Components/NoChat/NoChat';

function App() {

  const selectedChat = useSelector((state) => state.chatUsers.selectedId)
  const [newMessage, setNewMessage] = useState(false)

  return (
    <div style={{display:'flex'}}>
      <LeftBar newMessage={newMessage} setNewMessage={setNewMessage}/>
      {selectedChat ? <ChatPage setNewMessage={setNewMessage} newMessage={newMessage}/> : <NoChat/>}      
    </div>
  );
}

export default App;
