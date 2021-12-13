import React from "react";
import { useState } from "react";
import useQueryList from "hooks/useQueryList";
import WeaponCard from "./WeaponCard";
import Loading from "components/atoms/Loading";
import './WeaponList.css';
import { useIsFetching } from "react-query";
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
    const isFetching = useIsFetching();
    const filterWeapons = event => {
        const type = event.target.innerText;
        setFilterType(`${type}`)
    }

    if ((isFetching !== 0 || isLoading) !== false) {
        return <Loading />
    }

    return (
        <div className = "weaponListPage">
            <h1>Weapons</h1>
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