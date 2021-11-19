import React from 'react'
import useQueryList from '../../hooks/useQueryList'
import ArtifactsCard from './ArtifactsCard'
import './ArtifactsList.css'

const ArtifactsList = () => {
    const { data, status, isLoading, error } = useQueryList('artifacts')
    
    return (
        <div className = "artifactListPage">
            {status === 'success' && data.map((artifact, index) => (
                <ArtifactsCard key = {index} artifactName = {artifact}/>
            ))}
        </div>
    )
}

export default ArtifactsList;