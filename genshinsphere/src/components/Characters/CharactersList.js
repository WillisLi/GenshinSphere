import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import './CharactersList.css'

const fetchCharacters = async () => {
    const { data } = await axios.get('https://api.genshin.dev/characters')
    return data;
}

const CharactersList = () => {
    const { data: characters, status, isLoading, error } = useQuery('characters', fetchCharacters)

    return (
        <div className = "characterListPage">
            {status === 'success' && characters.map((character, index) => (
                <CharacterCard key = {index} characterName = {character}/>
            ))}
        </div>
    )
}

export default CharactersList;