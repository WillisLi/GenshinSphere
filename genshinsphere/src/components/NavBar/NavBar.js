import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import NavBarData from "./NavBarData";
import "./NavBar.css";

const NavBar = () => {
    const [subMenu, setSubMenu] = useState(false)

    const displaySubMenu = (event) => {
        event.preventDefault();
        setSubMenu(!subMenu)
    }

    return (
        <div className = "navBar">
            {NavBarData.map((item, index) => (
                <div key = {index} className = "navBarItem">
                    {item.path ? <NavLink to = {item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>:
                    <div className = "dropDownItem" onClick = {item.subMenu && displaySubMenu}>
                        <div>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                            {item.subMenu && subMenu ? item.openIcon : item.subMenu ? item.closedIcon : null}
                    </div>}
                    <div className = "subMenuDiv">
                        {subMenu && item.subMenu && item.subMenu.map((subItem, index) => (
                            <NavLink to = {subItem.path} key = {index}>
                                {subItem.icon}
                                {subItem.title}
                            </NavLink>
                        ))}
                    </div>
                </div>  
            ))}
        </div>
    )
}

export default NavBar;