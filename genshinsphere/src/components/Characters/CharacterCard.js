import React from 'react';
import axios from 'axios';
import { useQuery, useQueries } from 'react-query';
import './CharactersList.css'

const fetchCharacterData = async (characterName) => {
    const { data } = await axios.get(`https://api.genshin.dev/characters/${characterName}`)
    return data;
}

const fetchCharacterIcon = async (characterName) => {
    const { config } = await axios.get(`https://api.genshin.dev/characters/${characterName}/icon`)
    return config;
}

const CharacterCard = ({characterName}) => {
    // const results = useQueries([
    //     {queryKey: ['character', characterName], queryFn: () => fetchCharacterData(characterName) },
    //     {queryKey: ['characterIcon', characterName], queryFn: () => fetchCharacterIcon(characterName) },
    //   ])
    const { data: character, status, isLoading, error } = useQuery(['character', characterName], () => fetchCharacterData(characterName))
    const { data: characterIcon, status: iconStatus} = useQuery(['characterIcon', characterName], () => fetchCharacterIcon(characterName))

    return (
        <div className = "characterCard">
            {status === 'success' && iconStatus === 'success' &&
            <div className = "characterDetails">
                <img src = {characterIcon.url} alt = "characterIcon"/>
                <div className = "characterText">
                    <p>{character.name}</p>
                    <p>{character.vision}</p>
                    <p>{character.weapon}</p>
                </div>
            </div>}
        </div>
    )
}

export default CharacterCard;