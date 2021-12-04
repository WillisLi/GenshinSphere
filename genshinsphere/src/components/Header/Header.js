import React from 'react'
import SearchBar from './SearchBar'
import Clock from './Clock'
import './Header.css'
import { ImSphere } from 'react-icons/im'

const Header = () => {
    return (
        <div className = "header">
            <div className = "logo">
                <p>GenshinSphere</p>
                {<ImSphere style = {{fontSize: '1.6em'}}/>}
            </div>
            <SearchBar />
            <Clock />
        </div>
    )
}

export default Header
