import React from 'react'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import user_icon_solid_black from "../../images/user_icon_solid_black.png";
import "./MainHeader.css"

function MainHeader() {
  return (
    <div className='main-header'>
        
        <div className="header-section left">
            <h1 className='web-title'>Blogeenie</h1>
            <div className='links'>
              <a href='#'>Home</a>
              <a href="#">Friends</a>
              <button className='create-post-btn'>Create</button>
            </div>
        </div>
        <div className="header-section account">
            <img src={user_icon_solid_black} alt="User Icon"></img>
        </div>
    </div>
  )
}

export default MainHeader
