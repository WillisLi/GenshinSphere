import React, { useState } from 'react';
import useQueryEntityData from 'hooks/useQueryEntityData';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import ShopGraphic from './ShopGraphic';
import './Homepage.css'
import hehe from 'static/images/hehe.png'
import heyTao from 'static/images/heyTao.png'

const Homepage = () => {
    const { data: shopData, status, isLoading } = useQueryEntityData('shop', 'starglitter_exchange')
    const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString("en-US", { month: "long" }));

    function updateTime() {
        setCurrentMonth(new Date().toLocaleString("en-US", { month: "long" }))
    }
    setInterval(updateTime, 1000);

    return (
        <div className = "homepage">
                <div className = "info">
                    <section className = "about">
                        <h2>About</h2>
                        <p style = {{"text-indent": 0}}>
                            GenshinSphere is a fan-made project and all assets and rights belong to miHoYo Co., Ltd. This is a database for mobile game, Genshin Impact, primarily used to serve as a central hub for players to easily access useful resources related to the game.<br></br>Updates to this site are continuously being made to improve your overall user experience.
                        </p>
                    </section>
                </div>
                <div className = "side">
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
                        <iframe src="https://www.youtube.com/embed/iXeJ94AFZDw" title = "Character Demo - Arataki Itto"></iframe>
                        <iframe src="https://www.youtube.com/embed/O9Z96Mg-pk0" title = "Character Demo - Gorou"></iframe>
                        <iframe src="https://www.youtube.com/embed/YjiloHxQ5eE" title = "TGA 2021 Entry Video"></iframe>
                    </div>
                </div>
        </div>
    )
}

export default Homepage;