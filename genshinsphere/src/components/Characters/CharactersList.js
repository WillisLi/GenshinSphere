import React from 'react'
import CharacterCard from './CharacterCard';
import './CharactersList.css'
import useQueryList from '../../hooks/useQueryList';

const CharactersList = () => {
    const { data, status, isLoading, error } = useQueryList('characters')

    return (
        <div className = "characterListPage">
            {status === 'success' && data.map((character, index) => (
                <CharacterCard key = {index} characterName = {character}/>
            ))}
        </div>
    )
}

export default CharactersList;