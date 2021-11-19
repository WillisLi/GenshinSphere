import React from "react";
import useQueryList from "../../hooks/useQueryList";
import WeaponCard from "./WeaponCard";
import './WeaponList.css';
const WeaponList = () => {
    const { data, status, isLoading } = useQueryList('weapons')
    
    return (
        <div className = "weaponListPage">
            {status === 'success' && data.map((weapon, index) => (
                <WeaponCard key = {index} weaponName = {weapon}/>
            ))}
        </div>
    )
}

export default WeaponList