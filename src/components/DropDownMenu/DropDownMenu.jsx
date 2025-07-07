import React from "react";
import DropDownItem from "./DropDownItem";
import user from "../../images/user.png";
import settings from "../../images/settings.png"
import logout from "../../images/log-out.png"
import edit from "../../images/edit.png"
import "./DropDownMenu.css"

function DropDownMenu({username, title, isDropDownActive}) {
    return (

        isDropDownActive && <div className="dropdown-menu">
            <h3>{username}<br/><span>{title}</span></h3>
            <ul>
                <DropDownItem img={user} text={"My profile"}/>
                <DropDownItem img={settings} text={"Settings"}/>
                <DropDownItem img={logout} text={"Logout"}/>
            </ul>
        </div>
    )
}

export default DropDownMenu