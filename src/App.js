import React, { useState, useEffect } from 'react';

import ChatListitem from './components/ChatListitem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';

export default () =>{

  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'fulano de tal', image: 'https://media.gettyimages.com/photos/isometric-city-realistic-3d-illustration-picture-id1291121998'},
    {chatId: 2, title: 'fulano de tal', image: 'https://media.gettyimages.com/photos/isometric-city-realistic-3d-illustration-picture-id1291121998'},
    {chatId: 3, title: 'fulano de tal', image: 'https://media.gettyimages.com/photos/isometric-city-realistic-3d-illustration-picture-id1291121998'},
    {chatId: 4, title: 'fulano de tal', image: 'https://media.gettyimages.com/photos/isometric-city-realistic-3d-illustration-picture-id1291121998'},

  ]);

  const handleNewChat = () =>{
    setShowNewChat(true);
  }

  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    setUser(newUser);
  }

  if(user === null){
    return(<Login onReceive={handleLoginData}/>)
  }

  return(
    <div className="app-window">
      <div className="sidebar">
        <NewChat 
            show={showNewChat}
            setShow={setShowNewChat}
            user={user}
            chatlist={chatlist}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="avatar"></img>
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color:'#919191'}} />
            </div>
            
            <div onClick={handleNewChat} className="header--btn">
              <ChatIcon style={{color:'#919191'}} />
            </div>
            
            <div className="header--btn">
              <MoreVertIcon style={{color:'#919191'}} />
            </div>

          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa"></input>
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item,key) =>(
            <ChatListitem 
            
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}

            />
          ))}

        </div>


      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && 
          <ChatWindow 
            user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }

      </div>
    </div>
  )
}