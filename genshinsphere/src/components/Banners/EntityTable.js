import React from "react";
import axios from 'axios';
import { useQuery } from 'react-query';
import './EntityTable.css'

const fetchIcon = async (name, type) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/characters/${name}/icon`)
    return config;
}

const EntityTable = ({dataSet, type}) => {
    const { data: icon, status: iconStatus} = useQuery(['icon', dataSet], () => fetchIcon(dataSet, type), {
        staleTime: 200000,
    })

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
    );
}

export default EntityTable;