import React from 'react';
import './Footer.css'
import { FaDiscord, FaReddit, FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "information">
                <p>
                    This project is a fan-made project used for informational and educational purposes only.
                </p>
                <p>
                    All assets, images, and media related to <em>Genshin Impact</em> belong to miHoYo Co., Ltd.
                </p>
                <p className = "github">My Github: <a href = "https://github.com/WillisLi" target="_blank" rel="noopener noreferrer">{<FaGithub style = {{color: "black", fontSize: '2.5em'}}/>}</a></p>
            </div>
            <hr />
            <div className = "official-links">
                <p>Check out these official Genshin Impact Links!</p>
                <div className = "link-wrapper">
                    <IconContext.Provider value = {{ color: 'black', size: '1.6em' }}>
                        <a href = "https://www.youtube.com/c/GenshinImpact" target="_blank" rel="noopener noreferrer">{<FaYoutube />}</a>
                        <a href = "https://twitter.com/GenshinImpact" target="_blank" rel="noopener noreferrer">{<FaTwitter />}</a>
                        <a href = "https://www.reddit.com/r/Genshin_Impact" target="_blank" rel="noopener noreferrer">{<FaReddit />}</a>
                        <a href = "https://discord.com/invite/GenshinImpact" target="_blank" rel="noopener noreferrer">{<FaDiscord />}</a>
                    </IconContext.Provider>
                </div>
            </div>
            <div className = "copyright">
                <p>&copy; {new Date().getFullYear()} GenshinSphere | All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;