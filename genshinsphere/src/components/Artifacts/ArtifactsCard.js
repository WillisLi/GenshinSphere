import React from 'react';
import useQueryEntityData from '../../hooks/useQueryEntityData';
import useQueryImage from '../../hooks/useQueryImage';
// import './CharactersList.css'
import { NavLink } from 'react-router-dom';

const ArtifactsCard = ({index, artifactName}) => {
    const { data: artifactData, status: artifactStatus } = useQueryEntityData("artifacts", artifactName);
    const { data: icon, status: iconStatus} = useQueryImage("artifacts", artifactName, !artifactName.includes("prayers_for_") ? "flower" : "circlet");
    
    if (artifactStatus === "success" && iconStatus === "success") {
        console.log(artifactData)
    }

    return (
        <div className = "artifactsCard">
            {artifactStatus === 'success' && iconStatus === 'success' &&
            <NavLink to = {`/artifacts/${artifactName}`} key = {index}>
            <div className = "artifactDetails">
                <img src = {icon} alt = "artifactIcon"/>
                <div className = "artifactText">
                    <p>{artifactData.name}</p>
                </div>
            </div></NavLink>}
        </div>
    )
}

export default ArtifactsCard;