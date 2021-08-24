import React, {useState} from 'react';
import './NewChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatlist, show, setShow}) =>{

    const [list, setList] = useState([
        {id:123, avatar: 'https://media.gettyimages.com/photos/isometric-city-realistic-3d-illustration-picture-id1291121998', name: 'Efraim Nascimento'},
        {id:123, avatar: 'https://media.gettyimages.com/photos/isometric-city-realistic-3d-illustration-picture-id1291121998', name: 'Efraim Nascimento'},
        {id:123, avatar: 'https://media.gettyimages.com/photos/isometric-city-realistic-3d-illustration-picture-id1291121998', name: 'Efraim Nascimento'},
        {id:123, avatar: 'https://media.gettyimages.com/photos/isometric-city-realistic-3d-illustration-picture-id1291121998', name: 'Efraim Nascimento'},
    ])
    const handleClose = () =>{
        setShow(false);
    }
    return(
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#fff'}}    />
                </div>
                <div className="newChat--headtitle">Nova conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item,key) =>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="avatar"></img>
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}