import React from 'react'
import useQueryList from '../../hooks/useQueryList'
import ArtifactsCard from './ArtifactsCard'
import './ArtifactsList.scss'

const ArtifactsList = () => {
    const { data, status, isLoading, error } = useQueryList('artifacts')
    
    return (
        <div className = "artifactListPage">
            <h1>Artifacts</h1>
            <div className = "artifactList">
                {status === 'success' && data.map((artifact, index) => (
                    <ArtifactsCard key = {index} artifactName = {artifact}/>
                ))}
            </div>
        </div>
    )
}

export default ArtifactsList;