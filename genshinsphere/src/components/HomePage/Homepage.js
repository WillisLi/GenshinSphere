import React from 'react';
import { useState } from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import './Homepage.css'
import moment from 'moment';

const Homepage = () => {
    const [time, setTime] = useState(moment().utcOffset("+15:00").format('HH:mm:ss'));
    
    function updateTime() {
        setTime(moment().utcOffset("+15:00").format('HH:mm:ss'));
    }
    setInterval(updateTime, 1000);

    return (
        <div className = "homepage">
            <p className = "timer">{"Daily Reset: " + time}</p>
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
                <iframe src="https://www.youtube.com/embed/GU3M6wtfrCY" title = "Albedo's Story - EP"></iframe>
                <iframe src="https://www.youtube.com/embed/sgAvJlOL0Gg" title = "Version 2.3 Announcement"></iframe>
                <iframe src="https://www.youtube.com/embed/CXYGOpcNNSQ" title = "Version 2.3 Trailer"></iframe>
            </div>
        </div>
    )
}

export default Homepage;