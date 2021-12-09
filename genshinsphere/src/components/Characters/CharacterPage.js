import React from "react";
import { useParams } from "react-router-dom";
import useQueryEntityData from 'hooks/useQueryEntityData';
import useQueryImage from 'hooks/useQueryImage';
import './CharacterPage.css';
import logo from 'logo.svg'

const CharacterPage = () => {
    const { name } = useParams();
    const { data: character, status, isLoading, error } = useQueryEntityData("characters", name);
    const { data: characterPortrait, status: portraitStatus, isLoading: loadingPortrait} = useQueryImage("characters", name, "portrait")
    console.log(character)

    if (isLoading || loadingPortrait) {
        return <div className = "loadingDiv"><img src = {logo} className = "loading" alt = "Loading..." /></div>
    }

    return (
        <div className = "characterPage">
            {status === "success" && portraitStatus === "success" &&
            <div className = "characterHeader">
                <h1>{character.name}</h1>
                <div className = "details">
                    <div className = "mainImg">
                        <img src = {characterPortrait} alt = "characterPortrait"/>
                    </div>
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
                </div>
            </div>}
            <div className = "characterBody">
                <div className = "combatTalents">
                    <h2>Combat Talents</h2>
                    {status === "success" && character.combatTalents.map((skill, index) => (
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
                </div>
                <div className = "passiveTalents">
                    <h2>Passive Talents</h2>
                    {status === "success" && character.passiveTalents.map((skill, index) => (
                        <div key = {index} className = "skill">
                            <h3>{skill.title}</h3>
                            <p style = {{margin: "2% 1%"}}>Requirement: {skill.requirement}</p>
                            <p style={{whiteSpace: "pre-line"}}>{skill.description}</p>
                        </div>
                    ))}
                </div>
                <div className = "constellations">
                    <h2>Constellations</h2>
                    {status === "success" && character.constellations.map((constellation, index) => (
                        <div key = {index} className = "constellation">
                            <h3>{constellation.title}</h3>
                            <p style = {{margin: "2% 1%"}}>{constellation.unlock}</p>
                            <p style={{whiteSpace: "pre-line"}}>{constellation.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CharacterPage;