import React, { useState, useEffect } from 'react';

import ChatListitem from './components/ChatListitem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';


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
  const [activeChat, setActiveChat] = useState({});

  return(
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header--avatar" src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_960_720.png" alt="avatar"></img>
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color:'#919191'}} />
            </div>
            
            <div className="header--btn">
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
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }

      </div>
    </div>
  )
}