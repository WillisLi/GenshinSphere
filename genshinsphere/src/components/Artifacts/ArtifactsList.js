import React from 'react'
import useQueryList from '../../hooks/useQueryList'
// import ArtifactsCard from './CharacterCard';
// import './CharactersList.css'

const ArtifactsList = () => {
    const { data, status, isLoading, error } = useQueryList('artifacts')
    if (status === 'success') {
        console.log(data)
    }
    return (
        <div className = "artifactListPage">
            {/* {status === 'success' && artifactsList.map((artifact, index) => (
                <ArtifactsCard key = {index} artifactName = {artifact}/>
            ))} */}
        </div>
    )
}

export default ArtifactsList;