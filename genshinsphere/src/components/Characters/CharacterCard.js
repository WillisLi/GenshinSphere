import React from 'react';
import { NavLink } from 'react-router-dom';
import useQueryEntityData from 'hooks/useQueryEntityData';
import useQueryImage from 'hooks/useQueryImage';

const CharacterCard = ({index, characterName, filterType}) => {
    const { data: charData, status: charStatus } = useQueryEntityData("characters", characterName);
    const { data: icon, status: iconStatus} = useQueryImage("characters", characterName, "icon");

    return (
        <>
            {charStatus === 'success' && (charData.vision === `${filterType}` || `${filterType}` === 'All') && iconStatus === 'success' &&
            <NavLink to = {`/characters/${characterName}`} key = {index}>
            <div className = "characterCard">
                <img src = {icon} alt = "characterIcon"/>
                <div className = "characterText">
                    <p>{charData.name}</p>
                    <p>{charData.vision}</p>
                    <p>{charData.weapon}</p>
                </div>
            </div></NavLink>}
        </>
    )
}

export default CharacterCard;