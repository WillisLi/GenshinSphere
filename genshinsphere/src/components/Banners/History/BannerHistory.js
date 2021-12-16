import React from 'react';
import Loading from 'components/atoms/Loading'
import useQueryEntityData from '../../../hooks/useQueryEntityData';
import BannerCard from './BannerCard';
import  { useIsFetching } from 'react-query';
import './BannerHistory.css'

const BannerHistory = () => {
    const { data: weaponBannerList, status: weapStatus, isLoading: weapLoading} = useQueryEntityData("banners", "weapon")
    const { data: characterBannerList, status: charStatus, isLoading: charLoading} = useQueryEntityData("banners", "character")
    const isFetching = useIsFetching();

    if (isFetching !== 0 || weapLoading || charLoading) {
        return <Loading />
    }

    return (
        <div className = "bannerHistoryPage">
            {charStatus === 'success' && <div className = "charColumn">
                {characterBannerList.map((character, index) => (
                    <BannerCard key = {index + "c"} banner = {character} type = "character"/>
                ))}
                <h1>Character Event Wish</h1>
            </div>}
            {weapStatus === 'success' && <div className = "weapColumn">
                {weaponBannerList.map((weapon, index) => (
                    <BannerCard key = {index + "w"} banner = {weapon} type = "weapon"/>
                ))}
                <h1>Epitome Invocation</h1>
            </div>}
        </div>
    );
}

export default BannerHistory;