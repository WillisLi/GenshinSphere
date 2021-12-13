import React from 'react';
import useQueryEntityData from 'hooks/useQueryEntityData';
import useQueryImage from 'hooks/useQueryImage';
import { NavLink } from 'react-router-dom';

const WeaponCard = ({index, weaponName, filterType}) => {
    const { data: weaponData, status: weaponStatus } = useQueryEntityData("weapons", weaponName);
    const { data: icon, status: iconStatus} = useQueryImage("weapons", weaponName, "icon");
    
    if (weaponStatus === "success" && iconStatus === "success") {
        console.log(weaponData)
    }

    return (
        <>
        {weaponStatus === 'success' && weaponData.type === `${filterType}` && iconStatus === 'success' &&
            <NavLink to = {`/weapons/${weaponName}`} key = {index}>
            <div className = "weaponCard">
                <img style = {weaponData.rarity === 4 ? {background: 'linear-gradient(110deg, hsl(255, 100%, 70%), hsl(263, 100%, 80%))'} : {background: 'linear-gradient(110deg, hsl(37, 100%, 60%), hsl(43, 79%, 80%)'}} src = {icon} alt = "weaponIcon"/>
                <p>{weaponData.name}</p>
            </div></NavLink>}
        </>
    )
}

export default WeaponCard;