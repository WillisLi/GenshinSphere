import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import logo from '../../logo.svg'
import './CharHistory.css'
import EntityTable from './EntityTable';

const fetchWeaponBannerHistory = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/banners/weapon`)
    return data;
}
const WeaponFourHistory = () => {
    const { data: weapons, status: weaponStatus, isLoading: weaponLoading, error: weaponError } = useQuery('weapons', fetchWeaponBannerHistory, { staleTime: 200000 })

    const propList = (data, type) => {
        let list = []
        for (let idx = 0; idx < data.length; idx++)  {
            const propType = data[idx][type]
            if (Array.isArray(propType)) {
                for (let index = 0; index < propType.length; index++) 
                    if (!list.includes(propType[index]))
                        list.push(propType[index])
            } else {
                list.push(propType)
            }
        }
        return list
    }

    return (
        <div className = "archivePage">
            {weaponStatus === "success" &&
            <EntityTable entityNames = {propList(weapons, "featured")} history = {weapons} versions = {propList(weapons, "version")} type = "weapons"/>
            }
        </div>
    );
}

export default WeaponFourHistory;