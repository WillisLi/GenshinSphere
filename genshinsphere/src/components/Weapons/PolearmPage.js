import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchWeaponsList = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/weapons`)
    return data;
}

const PolearmPage = () => {
    const { data: weaponList, status: weaponStatus, isLoading: weaponLoading, error: weaponError } = useQuery('weaponList', fetchWeaponsList, { staleTime: 200000 })

    return (
        <div className = "PolearmPage">
            
        </div>
    )
}

export default PolearmPage;