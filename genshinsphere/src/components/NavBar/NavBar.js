import React, { useState } from 'react';
import "./NavBar.css";
import NavBarData from "./NavBarData"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [subMenu, setSubMenu] = useState(false);

    const displaySubMenu = (event) => {
        event.preventDefault();
        setSubMenu(!subMenu)
    }

    return (
        <div className = "navBar">
            {NavBarData.map((nav, index) => (
                <div key = {index} className = "navBarItem">
                    {nav.path ? <NavLink to = {nav.path}>
                        {nav.icon}
                        <span>{nav.title}</span>
                    </NavLink>:
                    <div className = "dropDownNav" onClick = {nav.subMenu && displaySubMenu}>
                        <div>
                            {nav.icon}
                            <span>{nav.title}</span>
                        </div>
                            {nav.subMenu && subMenu ? nav.openIcon : nav.subMenu ? nav.closedIcon : null}
                    </div>}
                    <div className = "subMenuDiv">
                        {subMenu && nav.subMenu.map((subNav, index) => (
                            <NavLink to = {subNav.path} key = {index}>
                                {subNav.icon}
                                {subNav.title}
                            </NavLink>
                        ))}
                    </div>
                </div>  
            ))}
        </div>
    )
}

export default NavBar;