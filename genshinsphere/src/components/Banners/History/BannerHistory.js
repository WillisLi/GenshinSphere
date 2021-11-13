import React from 'react';
import useQueryBannerList from '../../../hooks/useQueryBannerList';
import BannerCard from './BannerCard';
import './BannerHistory.css'
import logo from '../../../logo.svg'

const BannerHistory = () => {
    const { data: weaponBannerList, status: weapStatus, isLoading: weapLoading} = useQueryBannerList('weapon')
    const { data: characterBannerList, status: charStatus, isLoading: charLoading} = useQueryBannerList('character')

    if (weapLoading || charLoading) {
        return <div className = "loadingDiv"><img src = {logo} className = "loading" alt = "Loading..." /></div>
    }

    return (
        <div className = "bannerHistoryPage">
            <div className = "charColumn">
                {charStatus === 'success' && characterBannerList.map((character, index) => (
                    <BannerCard key = {index + "c"} banner = {character} type = "character"/>
                ))}
            </div>
            <div className = "weapColumn">
                {weapStatus === 'success' && weaponBannerList.map((weapon, index) => (
                    <BannerCard key = {index + "w"} banner = {weapon} type = "weapon"/>
                ))}
            </div>
        </div>
    );
}

export default BannerHistory;