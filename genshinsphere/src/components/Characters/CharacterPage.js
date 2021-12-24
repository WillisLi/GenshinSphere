import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useQueryEntityData from 'hooks/useQueryEntityData';
import useQueryImageTypes from "hooks/useQueryImageTypes";
import Image from "components/atoms/Image";
import Loading from "components/atoms/Loading";
import FilterTabs from "components/atoms/FilterTabs";
import './CharacterPage.scss';

const CharacterPage = () => {
    const { name } = useParams();
    const { data: charImgTypes, status: imgStatus, isLoading: imgListLoading } = useQueryImageTypes("characters", name)
    const { data: character, status, isLoading } = useQueryEntityData("characters", name);
    const [ filterType, setFilterType ] = useState('card');
    const [ infoFilter, setInfoFilter ] = useState('combat');
    console.log(character)

    if (isLoading || imgListLoading) {
        return <Loading />
    }

    const filterImages = event => {
        const type = event.target.value;
        setFilterType(`${type}`)
    }

    const filterData = event => {
        const type = event.target.value;
        setInfoFilter(`${type}`)
    }

    return (
        <div className = "page">
            <h1>{character.name}</h1>
            {status === "success" && imgStatus === "success" &&
            <div className = "characterHeader">
                <FilterTabs filters = {charImgTypes.filter(type => type !== "icon" && type !== "side" && type !== "summon")} filterByType = {filterImages}/>
                <Image index = {1} cat = "characters" name = {name} type = {filterType}/>
                <table>
                    <tbody>
                        <tr>
                            <th>Constellation</th>
                            <td>{character.constellation}</td>
                        </tr>
                        <tr>
                            <th>Rarity</th>
                            <td>{"★".repeat(character.rarity)}</td>
                        </tr>
                        <tr>
                            <th>Birthday</th>
                            <td>{character.birthday}</td>
                        </tr>
                        <tr>
                            <th>Affiliation</th>
                            <td>{character.affiliation}</td>
                        </tr>
                        <tr>
                            <th>Nation</th>
                            <td>{character.nation}</td>
                        </tr>
                        <tr>
                            <th>Vision</th>
                            <td>{character.vision}</td>
                        </tr>
                        <tr>
                            <th>Weapon</th>
                            <td>{character.weapon}</td>
                        </tr>
                        <tr>
                            <th>Bio</th>
                            <td>{character.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
            {status === "success" && <div className = "characterBody">
                <FilterTabs filters = {["combat", "passive", "constellations"]} filterByType = {filterData}/>
                {infoFilter === "combat" && <div className = "combatTalents">
                    <h2>Combat Talents</h2>
                    {character.combatTalents.map((skill, index) => (
                        <div key = {index} className = "skill">
                            <h3>{skill.type + ": " + skill.title}</h3>
                            {skill.excerpt && <p style = {{margin: "2% 1%"}}>{skill.excerpt}</p>}
                            <p style={{whiteSpace: "pre-line"}}>{skill.description}</p>
                            <table>
                                <tbody>
                                {skill.info.map((damage, index) => (
                                    <tr key = {index}>
                                        <th>{damage.type}</th>
                                        <td>{damage.value}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>}
                {infoFilter === "passive" &&<div className = "passiveTalents">
                    <h2>Passive Talents</h2>
                    {character.passiveTalents.map((skill, index) => (
                        <div key = {index} className = "skill">
                            <h3>{skill.title}</h3>
                            <p style = {{margin: "2% 1%"}}>Requirement: {skill.requirement}</p>
                            <p style={{whiteSpace: "pre-line"}}>{skill.description}</p>
                        </div>
                    ))}
                </div>}
                {infoFilter === "constellations" && <div className = "constellations">
                    <h2>Constellations</h2>
                    {character.constellations.map((constellation, index) => (
                        <div key = {index} className = "constellation">
                            <h3>{constellation.title}</h3>
                            <p className = "desc" style = {{margin: "2% 1%"}}>{constellation.unlock}</p>
                            <p style={{whiteSpace: "pre-line"}}>{constellation.description}</p>
                        </div>
                    ))}
                </div>}
            </div>}
        </div>
    )
}

export default CharacterPage;