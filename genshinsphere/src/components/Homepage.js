import React from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import './Homepage.css'

const Homepage = () => {
    return (
        <div className = "homepage">
            <div className = "homePageTest">
                <div className="twitter-embed">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="GenshinImpact"
                        options = {{
                            tweetLimit: "15",
                            width: "90%",
                            height: "100%"
                        }}
                        noHeader="true"
                        noBorders="true"
                        noFooter="true"
                    ></TwitterTimelineEmbed>
                </div>
            </div>
        </div>
    )
}

export default Homepage;