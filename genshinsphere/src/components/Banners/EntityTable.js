import React from "react";
import axios from 'axios';
import { useQueries, useIsFetching } from 'react-query';
import { useEffect, useState } from "react";
import './EntityTable.css'

const fetchIcon = async (name, type) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/${type}/${name}/icon`)
    return config.url;
}

const EntityTable = ({entityNames, history, versions, type}) => {
    const results = useQueries(entityNames.map(entityName => ({
            queryKey: ["icon", entityName],
            queryFn: () => fetchIcon(entityName.toLowerCase(), type),
    })))
    const isFetching = useIsFetching();

    if (isFetching === 0 && results[0].status === "success") {
        console.log('yay')
        console.log(results)
    }
    const getIcon = (resultsData, characterName) => {
        for (let idx = 0; idx < resultsData.length; idx++) {
            if (resultsData[idx].data.includes(characterName)) {
                return resultsData[idx].data
            }
        }
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
        <div className = "tableContainer">
            <table className = "historyTable">
                <thead>
                    <tr>
                        <th>Character</th>
                        {isFetching === 0 && results[0].status === 'success' && versions.map(versionNum => (
                        <th>
                            <td>{versionNum}</td>
                        </th>
                        ))}
                        </tr>
                </thead>
                <tbody>
                    {isFetching === 0 && results[0].status === 'success' && entityNames.sort().map(charName => (
                        <tr>
                            <td>{charName}</td>
                            {isFetching === 0 && results[0].status === 'success' && countChar(history, `${charName}`).map(entityHistory => (
                                entityHistory === 'featured' ? <td><img src = {getIcon(results, charName.toLowerCase())} alt = {`${charName}`}/></td> : <td>{entityHistory}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EntityTable;