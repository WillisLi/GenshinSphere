import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import logo from '../../logo.svg'
import './BannerCard.css'
import { useEffect, useState } from 'react';
const fetchBannerImage = async (type, order) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/banners/${type}/${order}`)
    return config;
}

const BannerCard = ({type, banner}) => {
    const { date, order } = banner;
    // const { data: typeBanner, status, isLoading, error } = useQuery(['banner', banner.order], () => fetchBannerImage(type, banner.order), {
    //     staleTime: 200000,
    // })
    const [url, setUrl] = useState()
    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/banners/${type}/${order}`)
            .then(res => {
                setUrl(res.config.url)
            })
            .catch(error => {
                console.log(error)
            })
    })
    // if (isLoading) {
    //     return <div className = "loadingDiv"><img src = {logo} className = "loading" alt = "Loading..." /></div>
    // }

    return (
        <div className = "bannerCard">
            <img src = {url} alt = "bannerImage"/>
            <div className = "details">
                <p>{date}</p>
            </div>
        </div>
    )
}

export default BannerCard;