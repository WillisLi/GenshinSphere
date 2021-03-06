import React, { useState } from 'react'
import { useIsFetching } from 'react-query';
import useQueryList from 'hooks/useQueryList';
import FilterTabs from 'components/atoms/FilterTabs';
import Loading from 'components/atoms/Loading';
import CharacterCard from './CharacterCard';
import './CharactersList.scss'
import elementTypes from 'static/data/elementTypes.json';

const CharactersList = () => {
    const { data, status, isLoading } = useQueryList('characters')
    const [ filterType, setFilterType ] = useState('All');
    const isFetching = useIsFetching();

    const filterCharacters = event => {
        const type = event.target.value;
        setFilterType(`${type}`)
    }

    if ((isFetching !== 0 || isLoading) !== false) {
        return <Loading />;
    }

    return (
        <div className = "page">
            <h1>Characters</h1>
            <FilterTabs filters = {elementTypes} filterByType = {filterCharacters} />
            <div className = "list">
                {status === 'success' && data.map((character, index) => (
                    <CharacterCard key = {index} characterName = {character} filterType = {filterType}/>
                ))}
            </div>
        </div>
    )
}

export default CharactersList;