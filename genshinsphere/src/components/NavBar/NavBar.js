import React from 'react';
import "./NavBar.css";
import NavBarData from "./NavBarData"
import SideBarItem from './SidebarItem';

const NavBar = () => {
    return (
        <div className = "navHeader">
            <div className = "navBar">
                {NavBarData.map((nav, index) => (
                    <SideBarItem item = {nav} key = {index}/>
                ))}
            </div>
        </div>
    )
}

export default NavBar;