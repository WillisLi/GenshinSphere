import React from 'react';
import { useState } from 'react';
import useQueryEntityData from '../../hooks/useQueryEntityData';
import useQueryImage from '../../hooks/useQueryImage';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import './Homepage.css'
import moment from 'moment';

const Homepage = () => {
    const { data: shopData, status, isLoading } = useQueryEntityData('shop', 'starglitter_exchange')
    const [time, setTime] = useState(moment().utcOffset("+15:00").format('HH:mm:ss'));
    const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString("en-US", { month: "long" }));
    // const shopCharacters = shopData?.rotations.filter(correct => correct.month.includes(currentMonth))
    // console.log(shopCharacters)
    // const { data: icon, status: iconStatus, isLoading: iconLoading} = useQueryImage('characters', , "icon");

    function updateTime() {
        setTime(moment().utcOffset("+15:00").format('HH:mm:ss'));
        setCurrentMonth(new Date().toLocaleString("en-US", { month: "long" }))
    }
    setInterval(updateTime, 1000);

    return (
        <div className = "homepage">
            <p className = "timer">{"Daily Reset: " + time}</p>
            {status === 'success' && <div className = "shopSection">
                <p>{currentMonth}'s Shop Rotation!</p>
                {shopData.rotation.map((correct, index) => (
                    <React.Fragment key = {index}>
                        {correct.month.includes(currentMonth) && <div>
                            <div className = "currentCharacters">{correct.characters.map((character, index) => (
                                <p key = {index + "c"}>{character}</p>
                            ))}</div>
                            <div className = "currentWeapons">{correct.weapons.map((weapon, index) => (
                                <p key = {index + "w"}>{weapon}</p>
                            ))}
                            </div>
                        </div>}
                    </React.Fragment>
                ))}
            </div>}
            <div className = "twitter-embed">
                <p>Check out the official Twitter!</p>
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
    )
}

export default Homepage;