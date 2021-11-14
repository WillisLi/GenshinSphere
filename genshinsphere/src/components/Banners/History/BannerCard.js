import React from 'react';
import useQueryImage from '../../../hooks/useQueryImage';
import logo from '../../../logo.svg'
import './BannerCard.css'

const BannerCard = ({type, banner}) => {
    const { date } = banner;
    const { data, status, isLoading } = useQueryImage("banners", type, `${banner.order}`);

    return (
        <div className = "bannerCard">
            {status === 'success' &&
            <div>
                <img src = {data} alt = "bannerImage"/>
                <div className = "details">
                    <p>{date}</p>
                </div>
            </div>}
        </div>
    )
}

export default BannerCard;