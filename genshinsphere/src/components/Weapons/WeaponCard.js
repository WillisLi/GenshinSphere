import React from 'react';
import useQueryEntityData from '../../hooks/useQueryEntityData';
import useQueryImage from '../../hooks/useQueryImage';
import { NavLink } from 'react-router-dom';

const WeaponCard = ({index, weaponName, filterType}) => {
    const { data: weaponData, status: weaponStatus } = useQueryEntityData("weapons", weaponName);
    const { data: icon, status: iconStatus} = useQueryImage("weapons", weaponName, "icon");
    
    if (weaponStatus === "success" && iconStatus === "success") {
        console.log(weaponData)
    }

    return (
        <>
        {weaponStatus === 'success' && weaponData.type === `${filterType}` && <div className = "weaponCard">
            {iconStatus === 'success' &&
            <NavLink to = {`/weapons/${weaponName}`} key = {index}>
            <div className = "weaponDetails">
                <img style = {weaponData.rarity === 4 ? {background: 'hsl(253, 100%, 84%)'} : {background: 'hsl(40, 100%, 66%)'}} src = {icon} alt = "weaponIcon"/>
                <p>{weaponData.name}</p>
            </div></NavLink>}
        </div>}
        </>
    )
}

export default WeaponCard;