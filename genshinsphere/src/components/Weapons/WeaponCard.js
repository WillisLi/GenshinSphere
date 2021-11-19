import React from 'react';
import useQueryEntityData from '../../hooks/useQueryEntityData';
import useQueryImage from '../../hooks/useQueryImage';
import { NavLink } from 'react-router-dom';

const WeaponCard = ({index, weaponName}) => {
    const { data: weaponData, status: weaponStatus } = useQueryEntityData("weapons", weaponName);
    const { data: icon, status: iconStatus} = useQueryImage("weapons", weaponName, "icon");
    
    if (weaponStatus === "success" && iconStatus === "success") {
        console.log(weaponData)
    }

    return (
        <div className = "weaponCard">
            {weaponStatus === 'success' && iconStatus === 'success' &&
            <NavLink to = {`/weapons/${weaponName}`} key = {index}>
            <div className = "weaponDetails">
                <img src = {icon} alt = "weaponIcon"/>
                <p>{weaponData.name}</p>
            </div></NavLink>}
        </div>
    )
}

export default WeaponCard;