import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import axios from "axios";
import './CharacterPage.css';
import logo from '../../logo.svg'

const fetchCharacterData = async (name) => {
    const { data } = await axios.get(`https://api.genshin.dev/characters/${name}`)
    return data;
}

const fetchCharacterPortrait = async (name) => {
    const { config } = await axios.get(`https://api.genshin.dev/characters/${name}/portrait`)
    return config;
}

const CharacterPage = () => {
    const { name } = useParams();
    const { data: character, status, isLoading, error } = useQuery(['character', name], () => fetchCharacterData(name), {
        staleTime: 200000,
        cacheTimeL: 200000,
    })
    const { data: characterPortrait, status: portraitStatus, isLoading: loadingPortrait} = useQuery(['characterPortrait', name], () => fetchCharacterPortrait(name), {
        staleTime: 200000,
        cacheTimeL: 200000,
    })
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
                        <img src = {characterPortrait.url} alt = "characterPortrait"/>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Constellation</th>
                                <td>{character.constellation}</td>
                            </tr>
                            <tr>
                                <th>Rarity</th>
                                <td>{character.rarity} Star</td>
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

            </div>
        </div>
    )
}

export default CharacterPage;