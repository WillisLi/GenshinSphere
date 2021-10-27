import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import logo from '../../logo.svg'
import './BannerCard.css'

const fetchBannerImage = async (type, order) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/banners/${type}/${order}`)
    console.log(config.url)
    return config.url;
}

const BannerCard = ({type, banner}) => {
    const { date } = banner;
    const { data, status, isLoading } = useQuery([`${type}`, banner.order], () => fetchBannerImage(type, banner.order), {
        staleTime: 200000,
    })

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