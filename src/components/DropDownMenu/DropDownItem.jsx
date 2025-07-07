import React from "react";
import "./DropDownItem.css"

function DropDownItem({img, text}) {
    return (
        <li className="dropdown-item">
            <img src={img}></img>
            <a href={`#${text}`}>{text}</a>
        </li>
    )
}

export default DropDownItem