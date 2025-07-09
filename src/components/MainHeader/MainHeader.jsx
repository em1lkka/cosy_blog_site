import React, { useState } from 'react'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import user_icon_solid_black from "../../images/user_nobg.png";
import "./MainHeader.css"
import DropDownMenu from '../DropDownMenu/DropDownMenu';

function MainHeader() {

  const [open, setOpen] = useState(false);

  return (
    <div className='main-header'>
        
        <div className="header-section left">
            <h1 className='web-title'><a href='#home'>Hob<span className='beet'>BEET</span></a></h1>
            <div className='links'>
              <a href='#home'>Home</a>
              <a href="#friends">Friends</a>
              <a href="/create-post" className='create-post-btn'>Create</a>
            </div>
        </div>
        <div className="header-section account" onClick={() => {setOpen(!open)}}>
            <img src={user_icon_solid_black} alt="User Icon"></img>
        </div>
        <DropDownMenu username={"dinozaurka"} title={"Coffee enthusiast"} isDropDownActive={open}/>
    </div>
  )
}

export default MainHeader
