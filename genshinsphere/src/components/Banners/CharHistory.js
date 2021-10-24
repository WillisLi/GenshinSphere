import React from 'react'
import axios from 'axios';
import { useQuery, useQueries } from 'react-query';
import { useEffect, useState } from 'react';
import logo from '../../logo.svg'
import './CharHistory.css'

const fetchCharacterBannerHistory = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/banners/character`)
    return data;
}

const fetchCharacterIcon = async (characterName) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/characters/${characterName}/icon`)
    return config;
}

const CharHistory = () => {
    const { data: characters, status: charStatus, isLoading: charLoading, error: charError } = useQuery('characters', fetchCharacterBannerHistory)

    // const { data: characterIcon, status: iconStatus} = useQuery(['characterIcon', characterName], () => fetchCharacterIcon(characterName), {
    //     staleTime: 200000,
    //     enabled: !!
    // })

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

    const countChar = (data, character) => {
        const countHistory = []
        let count = 0;
        for (let idx = 0; idx < data.length; idx++)  {
            const { featured } = data[idx]
            if (!countHistory.includes("featured") && !featured.includes(character)) {
                countHistory.push(null);
            } else if (countHistory.includes("featured") && !featured.includes(character)) {
                count += 1;
                countHistory.push(count)
            } else if (featured.includes(character)) {
                count = 0;
                countHistory.push('featured');
            }
        }
        return countHistory;
    }

    return (
        <div className = "archivePage">
            <div className = "tableContainer">
                <table className = "historyTable">
                    <thead>
                        <tr>
                            <th>Character</th>
                            {charStatus === 'success' && propList(characters, 'version').sort().map(versionNum => (
                            <th>
                                <td>{versionNum}</td>
                            </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {charStatus === 'success' && propList(characters, 'featured').sort().map(charName => (
                            <tr>
                                <td>{charName}</td>
                                {charStatus === 'success' && countChar(characters, `${charName}`).map(history => (
                                <td>{history}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CharHistory;