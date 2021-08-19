import React from 'react';  

import './ChatListitem.css'

export default () =>{
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face.png" alt="avatar"></img>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">
                        Efraim Nscimento
                    </div>
                    <div className="chatListItem--date">
                        19:00
                    </div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}