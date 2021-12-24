import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import Clock from './Clock'
import './Header.css'
import { ImSphere } from 'react-icons/im'

const Header = () => {
    return (
        <div className = "header">
            <NavLink className = "logo" to = "/">
                <p>GenshinSphere</p>
                {<ImSphere style = {{fontSize: '1.6em'}}/>}
            </NavLink>
            <SearchBar />
            <Clock />
        </div>
    )
}

export default Header
