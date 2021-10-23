import React from 'react';
import axios from 'axios';
import { useQuery, useQueries } from 'react-query';
import './CharactersList.css'
import { NavLink } from 'react-router-dom';
const fetchCharacterData = async (characterName) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/characters/${characterName}`)
    return data;
}

const fetchCharacterIcon = async (characterName) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/characters/${characterName}/icon`)
    return config;
}

const CharacterCard = ({index, characterName}) => {
    // const results = useQueries([
    //     {queryKey: ['character', characterName], queryFn: () => fetchCharacterData(characterName) },
    //     {queryKey: ['characterIcon', characterName], queryFn: () => fetchCharacterIcon(characterName) },
    //   ])
    const { data: character, status, isLoading, error } = useQuery(['character', characterName], () => fetchCharacterData(characterName), {
        staleTime: 200000,
    })
    const { data: characterIcon, status: iconStatus} = useQuery(['characterIcon', characterName], () => fetchCharacterIcon(characterName), {
        staleTime: 200000,
    })

    return (
        <div className = "characterCard">
            {status === 'success' && iconStatus === 'success' &&
            <NavLink to = {`/characters/${characterName}`} key = {index}>
            <div className = "characterDetails">
                <img src = {characterIcon.url} alt = "characterIcon"/>
                <div className = "characterText">
                    <p>{character.name}</p>
                    <p>{character.vision}</p>
                    <p>{character.weapon}</p>
                </div>
            </div></NavLink>}
        </div>
    )
}

export default CharacterCard;