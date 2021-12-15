import React, { useState } from "react";
import { useIsFetching } from "react-query";
import useQueryList from "hooks/useQueryList";
import FilterTabs from 'components/atoms/FilterTabs';
import Loading from "components/atoms/Loading";
import WeaponCard from "./WeaponCard";
import './WeaponList.scss';
import types from 'static/data/weaponTypes.json';

const WeaponList = () => {
    const { data, status, isLoading } = useQueryList('weapons')
    const [ filterType, setFilterType ] = useState('All');
    const isFetching = useIsFetching();

    const filterWeapons = event => {
        const type = event.target.value;
        setFilterType(`${type}`)
    }

    if ((isFetching !== 0 || isLoading) !== false) {
        return <Loading />
    }

    return (
        <div className = "page">
            <h1>Weapons</h1>
            <FilterTabs filters = {types} filterByType = {filterWeapons} />
            <div className = "list">
                {status === 'success' && data.map((weapon, index) => (
                    <WeaponCard key = {index} weaponName = {weapon} filterType = {filterType}/>
                ))}
            </div>
        </div>
    )
}

export default WeaponList