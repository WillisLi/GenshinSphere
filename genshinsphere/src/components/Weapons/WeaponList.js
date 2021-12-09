import React from "react";
import { useState } from "react";
import useQueryList from "hooks/useQueryList";
import WeaponCard from "./WeaponCard";
import './WeaponList.css';
import logo from 'logo.svg';

const types = [
    "Sword",
    "Claymore",
    "Polearm",
    "Bow",
    "Catalyst"
]

const WeaponList = () => {
    const { data, status, isLoading } = useQueryList('weapons')
    const [ filterType, setFilterType ] = useState('Sword');

    const filterWeapons = event => {
        const type = event.target.innerText;
        setFilterType(`${type}`)
    }

    if (isLoading) {
        return <div className = "loadingDiv"><img src = {logo} className = "loading" alt = "Loading..." /></div>
    }

    return (
        <div className = "weaponListPage">
            <div className = "filter-tabs">
                {types.map((type, index) => (
                    <button type = "button" className = {`${type}`} key = {index} onClick = {filterWeapons}>{type}</button>
                ))}
            </div>
            <div className = "weaponList">
                {status === 'success' && data.map((weapon, index) => (
                    <WeaponCard key = {index} weaponName = {weapon} filterType = {filterType}/>
                ))}
            </div>
        </div>
    )
}

export default WeaponList