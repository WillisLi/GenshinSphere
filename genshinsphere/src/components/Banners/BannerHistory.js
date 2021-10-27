import React from 'react';
import axios from 'axios';
import { useQuery, useQueries } from 'react-query';
import BannerCard from './BannerCard';
import './BannerHistory.css'
import logo from '../../logo.svg'

const fetchWeaponBannerHistory = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/banners/weapon`)
    return data;
}

const fetchCharacterBannerHistory = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/banners/character`)
    return data;
}

const BannerHistory = () => {
    const { data: weapons, status: weapStatus, isLoading: weapLoading} = useQuery('weapons', fetchWeaponBannerHistory, { staleTime: 200000 })
    const { data: characters, status: charStatus, isLoading: charLoading} = useQuery('characters', fetchCharacterBannerHistory, { staleTime: 200000 })

    if (weapLoading || charLoading) {
        return <div className = "loadingDiv"><img src = {logo} className = "loading" alt = "Loading..." /></div>
    }

    return (
        <div className = "bannerHistoryPage">
            <div className = "charColumn">
                {charStatus === 'success' && characters.map((character, index) => (
                    <BannerCard key = {index + "c"} banner = {character} type = "character"/>
                ))}
            </div>
            <div className = "weapColumn">
                {weapStatus === 'success' && weapons.map((weapon, index) => (
                    <BannerCard key = {index + "w"} banner = {weapon} type = "weapon"/>
                ))}
            </div>
        </div>
    );
}

export default BannerHistory;