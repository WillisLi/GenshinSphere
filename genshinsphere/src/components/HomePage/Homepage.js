import React, { useState } from 'react';
import useQueryEntityData from 'hooks/useQueryEntityData';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import ShopGraphic from './ShopGraphic';
import './Homepage.css'
import hehe from 'static/images/hehe.png'

const Homepage = () => {
    const { data: shopData, status, isLoading } = useQueryEntityData('shop', 'starglitter_exchange')
    const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString("en-US", { month: "long" }));

    function updateTime() {
        setCurrentMonth(new Date().toLocaleString("en-US", { month: "long" }))
    }
    setInterval(updateTime, 1000);

    return (
        <div className = "homepage">
            <div className = "mainContent">
                <div className = "info">
                    {status === 'success' && <div className = "shopSection">
                        <p className = "shopHeader">{currentMonth}'s Shop Rotation!</p>
                        {shopData.rotation.map((correct, index) => (
                            <React.Fragment key = {index}>
                                {correct.month.includes(currentMonth) && <div>
                                    <div className = "currentItems">{correct.characters.map((character, index) => (
                                        <ShopGraphic key = {index + "c"} type = "characters" name = {character}/>
                                    ))}</div>
                                    <div className = "currentItems">{correct.weapons.map((weapon, index) => (
                                        <ShopGraphic key = {index + "w"} type = "weapons" name = {weapon}/>
                                    ))}
                                    </div>
                                </div>}
                            </React.Fragment>
                        ))}
                    </div>}
                </div>
                <div className = "embeds">
                    <div className = "twitter-embed">
                        <p className = "twitter-header">Check out the official Twitter! <img src = {hehe} alt = "paimonHehe" /></p>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="GenshinImpact"
                            options = {{
                                height: "100%"
                            }}
                            noHeader={true}
                            noBorders={true}
                            noFooter={true}
                            noScrollbar={true}
                        ></TwitterTimelineEmbed>
                    </div>
                    <div className = 'youtube-embed'>
                        <p>Check out the latest Youtube Videos!</p>
                        <iframe src="https://www.youtube.com/embed/PUYloYPB9Go" title = "Eula's Story - EP"></iframe>
                        <iframe src="https://www.youtube.com/embed/GU3M6wtfrCY" title = "Albedo's Story - EP"></iframe>
                        <iframe src="https://www.youtube.com/embed/sgAvJlOL0Gg" title = "Version 2.3 Announcement"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;