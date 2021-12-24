import React from 'react'
import { useIsFetching } from 'react-query'
import { NavLink } from 'react-router-dom'
import { parseString } from 'utils/utils'
import Image from 'components/atoms/Image'
import Loading from 'components/atoms/Loading'
import './Teams.scss'

const Teams = () => {
    const isFetching = useIsFetching();

    if(isFetching !== 0) {
        <Loading />
    }

    return (
        <div className = "page">
            <h1>Team Compositions</h1>
            <section className = "teams">
                <h2>Abyss</h2>
                <div className = "team">
                    <h3>Vape Comp</h3>
                    <div className = "team-container">
                        {["Hu Tao", "Zhongli", "Xingqiu", "Xiangling"].map((name, idx) => (
                            <div className = "units">
                                <NavLink to = {`/characters/${parseString(name)}`}>
                                    <Image key = {idx} cat = "characters" name = {parseString(name)} type = "icon"/>
                                </NavLink>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <p className = "teamDesc">
                        My favorite team composition. With Hu Tao as the main dps, I love having the ability to spam charged attacks whilst triggering Vape reactions with Xingqiu's burst. Zhongli serves a shield and debuff support to protect Hu Tao due to her low HP play style. Xiangling's position is flexible.{'\n'}Initially, I used Albedo in her place for the particle generation and Geo Resonance, but I found that Xiangling does an outrageous amount of damage from here burst and Pyro Resonance also gives 10% extra attack, albeit it is less impactful compared to the 15% DMG Bonus and shield strength provided by Geo. One variation I do enjoy is Elegy Instructor Amber which gives a massive buff to Hu Tao.</p>
                </div>
                <div className = "team">
                    <h3>Morgana</h3>
                    <div className = "team-container">
                        {["Ganyu", "Venti", "Mona", "Diona"].map((name, idx) => (
                            <div className = "units">
                                <NavLink to = {`/characters/${parseString(name)}`}>
                                    <Image key = {idx} cat = "characters" name = {parseString(name)} type = "icon"/>
                                </NavLink>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <text className = "teamDesc">
                        The Morgana composition is one of the most common and capable teams used in Abyss. Ganyu, the number one ranked main DPS in the game and the core of the team, has no issue dealing high, AoE damage to many enemies from limitless range. She alone can be quite capable---however, that is not to say this team can not push her limits even further.{'\n'}The main schtick of Morgana is to infinitely freeze enemies in place while Ganyu, with her 4-piece Blizzard Strayer set, benefits from these frozen enemies with a 40% CRIT Rate increase. Venti groups enemies together with his Elemental Burst and Mona initiates the Freeze reaction with her Elemental Burst. Mona's burst also adds an additional effect, Omen, which gives a 60% DMG Bonus to enemies hit by the burst. Diona's position can be flexible, but she serves as an all-in-one package that is difficult to replace. She provides shields for Ganyu, which is helpful in avoiding interruption when she charges up her bow, and, Diona's burst provides healing for the team, which increases the overall sustainability of this comp. She also activates the Cryo Resonance that adds an additional 15% CRIT Rate to frozen enemies or those affected by Cryo.{'\n'}To get the full effect of these reactions the order of bursts is: Ganyu Burst → Venti Burst → Mona Burst → Mona Skill.
                    </text>
                </div>
                <div className = "team">
                    <h3>Eula and Raiden Burst Swap</h3>
                    <div className = "team-container">
                        {["Eula", "Raiden Shogun", "Zhongli", "Albedo"].map((name, idx) => (
                            <div className = "units">
                                <NavLink to = {`/characters/${parseString(name)}`}>
                                    <Image key = {idx} cat = "characters" name = {parseString(name)} type = "icon"/>
                                </NavLink>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <text className = "teamDesc">
                        In this team, Eula and Raiden share the spotlight. Eula's burst provides a hefty amount of physical damage, but her normal attacks also pack a punch. Raiden's skill acts as a SuperConduct trigger that decreases the Physical RES of enemies. This reaction, combined with Eula's hold skill and Zhongli's debuff, generates a large Physical RES decrease. Albedo serves a particle generator and to initiate Geo Resonance, which further increases the team's damage by 15%.{'\n'}When Eula's burst is on a downtime, Raiden is switched in to activate her Elemental Burst. She will do a respectable amount of damage, but the main benefit is the energy recharge generated by her attacks when she hits opponents. This allows for an alternating burst spam between the two, which is sure to leave your enemies regretting they ever crossed your sight.
                    </text>
                </div>
                <div className = "team">
                    <h3>Raiden National</h3>
                    <div className = "team-container">
                        {["Raiden Shogun", "Bennett", "Xingqiu", "Xiangling"].map((name, idx) => (
                            <div className = "units">
                                <NavLink to = {`/characters/${parseString(name)}`}>
                                    <Image key = {idx} cat = "characters" name = {parseString(name)} type = "icon"/>
                                </NavLink>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <text className = "teamDesc">
                        One of the most dominant and powerful teams at the moment, Raiden National is not messing around. This team utilizes the sheer absurdity of the combination of high energy generation and extreme damage output. While Raiden stands as the "main DPS", everyone in this team has equal value.{'\n'}This comp works entirely on having Elemental Bursts up. We have Bennett who provides the best combination of ATK Bonus and Healing in the game, Xingqiu, who has the one of the best Elemental Bursts for triggering reactions, and Xiangling, with her high AoE Burst Damage and Pyro Resonance. Along with the particles generated from these three's skills, Raiden helps put this generation over the top with her Elemental Burst, which recharges energy on hit every 1s. She is also resistant to interruption during her burst state, which makes unleashing relentless attacks a breeze, while healing the absorbed damage with Bennett's burst. Her passive, which turns energy stacks into increase DMG Bonuses for Elemental Burst, also pushes the limits of damage output, further increase the overall damage of the entire team. This team has the best synergy in the game, is easy to play, and wipes out anything.
                    </text>
                </div>
            </section>
            <section className = "teams">
                <h2>Exploration</h2>
                <div className = "team">
                    <div className = "team-container">
                        {["Ganyu", "Venti", "Raiden Shogun", "Zhongli"].map((name, idx) => (
                            <div className = "units">
                                <NavLink to = {`/characters/${parseString(name)}`}>
                                    <Image key = {idx} cat = "characters" name = {parseString(name)} type = "icon"/>
                                </NavLink>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <text className = "teamDesc">
                        This is the exploration team I always use. Ganyu serves as the main DPS that can attack enemies from anywhere, which is perfect in this open-world environment. Venti groups together enemies with his burst. Raiden's skill is extremely helpful for additional damage when firing from a distance and Zhongli's shield is invaluable. If there ever is a need to go all-out, the combination of Ganyu's Burst, Venti's Burst, and Raiden's Skill is deadly.{'\n'}Due to the grouping capabilities and AoE nature of these bursts, the damage is multiplicative, effectively eliminating a large group of enemies at once.
                    </text>
                </div>
            </section>
        </div>
    )
}

export default Teams
