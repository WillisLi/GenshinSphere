import React from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import './Homepage.css'

const Homepage = () => {
    return (
        <div className = "homepage">
            <div className="twitter-embed">
                <p>Check out the official Twitter!</p>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="GenshinImpact"
                    options = {{
                        height: "410"
                    }}
                    noHeader={true}
                    noBorders={true}
                    noFooter={true}
                    noScrollbar={true}
                ></TwitterTimelineEmbed>
            </div>
        </div>
    )
}

export default Homepage;