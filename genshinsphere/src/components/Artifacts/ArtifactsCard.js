import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import './CharactersList.css'
import { NavLink } from 'react-router-dom';
const fetchCharacterData = async (characterName) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/characters/${characterName}`)
    return data;
}

const fetchCharacterIcon = async (characterName) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/characters/${characterName}/icon`)
    return config.url;
}

const ArtifactsCard = ({index, characterName}) => {
    const { data: charData, status: charStatus } = useQuery(['charData', characterName], () => fetchCharacterData(characterName), {
        staleTime: 200000,
    })
    const { data: icon, status: iconStatus} = useQuery(['icon', characterName], () => fetchCharacterIcon(characterName), {
        staleTime: 200000,
    })

    return (
        <div className = "artifactsCard">
            {charStatus === 'success' && iconStatus === 'success' &&
            <NavLink to = {`/characters/${characterName}`} key = {index}>
            <div className = "characterDetails">
                <img src = {icon} alt = "characterIcon"/>
                <div className = "characterText">
                    <p>{charData.name}</p>
                    <p>{charData.vision}</p>
                    <p>{charData.weapon}</p>
                </div>
            </div></NavLink>}
        </div>
    )
}

export default ArtifactsCard;