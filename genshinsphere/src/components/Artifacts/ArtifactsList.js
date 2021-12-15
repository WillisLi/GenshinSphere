import React, { useState } from 'react'
import useQueryList from '../../hooks/useQueryList'
import FilterTabs from 'components/atoms/FilterTabs';
import ArtifactsCard from './ArtifactsCard'
import './ArtifactsList.scss'
import rarityTypes from 'static/data/rarityTypes.json';

const ArtifactsList = () => {
    const { data, status, isLoading, error } = useQueryList('artifacts')
    const [ filterType, setFilterType ] = useState('All');

    const filterCharacters = event => {
        const type = event.target.value;
        setFilterType(`${type}`)
    }
    
    return (
        <div className = "page">
            <h1>Artifacts</h1>
            <FilterTabs filters = {rarityTypes} filterByType = {filterCharacters} />
            <div className = "list">
                {status === 'success' && data.map((artifact, index) => (
                    <ArtifactsCard key = {index} artifactName = {artifact} filterType = {filterType}/>
                ))}
            </div>
        </div>
    )
}

export default ArtifactsList;