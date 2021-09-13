import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarItem = (props) => {
    const { item } = props;
    const [subMenu, setSubMenu] = useState(false)

    const displaySubMenu = (event) => {
        event.preventDefault();
        setSubMenu(!subMenu)
    }

    return (
        <div className = "navBarItem">
            {item.path ? <NavLink to = {item.path}>
                <div>
                    {item.icon}
                    {item.title}
                </div>
            </NavLink> :
            <div className = "dropDownItem" onClick = {item.subMenu && displaySubMenu}>
                    {item.icon}
                    <span>{item.title}</span>
                    {item.subMenu && subMenu ? item.openIcon : item.subMenu ? item.closedIcon : null}
            </div>}
            <div className = "subMenuDiv">
                {subMenu && item.subMenu.map((subItem, index) => (
                    <NavLink to = {subItem.path} key = {index}>
                        {subItem.icon}
                        {subItem.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default SideBarItem;