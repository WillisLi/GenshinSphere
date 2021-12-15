import React from 'react';
import useQueryEntityData from 'hooks/useQueryEntityData';
import useQueryImage from 'hooks/useQueryImage';
import { NavLink } from 'react-router-dom';

const ArtifactsCard = ({index, artifactName, filterType}) => {
    const { data: artifactData, status: artifactStatus } = useQueryEntityData("artifacts", artifactName);
    const { data: icon, status: iconStatus} = useQueryImage("artifacts", artifactName, !artifactName.includes("prayers_for_") ? "flower" : "circlet");
    
    if (artifactStatus === "success" && iconStatus === "success") {
        console.log(artifactData)
    }

    return (
        <>
            {artifactStatus === 'success' && (artifactData.rarity[1] === parseInt(filterType) || `${filterType}` === 'All') && iconStatus === 'success' &&
            <NavLink to = {`/artifacts/${artifactName}`} key = {index}>
            <div className = "artifactCard">
                <img src = {icon} alt = "artifactIcon"/>
                <p>{artifactData.name}</p>
            </div></NavLink>}
        </>
    )
}

export default ArtifactsCard;