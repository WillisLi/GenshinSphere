import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import logo from '../../logo.svg'
import './CharHistory.css'
import EntityTable from './EntityTable';

const fetchCharacterBannerHistory = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/banners/character`)
    return data;
}
const CharHistory = () => {
    const { data: characters, status: charStatus, isLoading: charLoading, error: charError } = useQuery('characters', fetchCharacterBannerHistory, { staleTime: 200000 })

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
            {charStatus === "success" &&
            <EntityTable entityNames = {propList(characters, "featured")} history = {characters} versions = {propList(characters, "version")} type = "characters"/>
            }
        </div>
    );
}

export default CharHistory;