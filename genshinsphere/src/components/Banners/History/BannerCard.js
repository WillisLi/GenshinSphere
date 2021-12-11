import React from 'react';
import useQueryImage from 'hooks/useQueryImage';

const BannerCard = ({type, banner}) => {
    const { date } = banner;
    const { data, status } = useQueryImage("banners", type, `${banner.order}`);
    
    return (
        <>
            {status === 'success' &&
            <div className = "bannerCard">
                <img src = {data} alt = {`${type}Banner-${banner.order}`}/>
                <div className = "details">
                    <p>{date}</p>
                </div>
            </div>}
        </>
    )
}

export default BannerCard;