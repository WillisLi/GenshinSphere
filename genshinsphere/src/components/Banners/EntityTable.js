import React from "react";
import axios from 'axios';
import { useQueries, useIsFetching } from 'react-query';
import './EntityTable.css'

const fetchIcon = async (name, type) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/${type}/${name}/icon`)
    return config.url;
}

const EntityTable = ({entityNames, history, versions, type}) => {
    const results = useQueries(entityNames.map(entityName => ({
            queryKey: ["icon", entityName.replace(/[ /-]/g, '_').replace(/'/g, '').toLowerCase()],
            queryFn: () => fetchIcon(entityName.replace(/[ /-]/g, '_').replace(/'/g, '').toLowerCase(), type),
            staleTime: 200000,
    })))
    const isFetching = useIsFetching();

    if (isFetching === 0 && results[0].status === "success") {
        console.log(results)
    }

    const getIcon = (resultsData, entityName) => {
        for (let idx = 0; idx < resultsData.length; idx++) {
            if (resultsData[idx].data.includes(entityName)) {
                return resultsData[idx].data
            }
        }
    }

    const spanHeader = (versionList) => {
        const versionData = {}
        for (let idx = 0; idx < versionList.length; idx++) {
            if (versionList[idx] in versionData) {
                versionData[versionList[idx]] += 1
            } else {
                versionData[versionList[idx]] = 1;
            }
        }
        return versionData;
    }

    const countEntity = (data, entity) => {
        const countHistory = []
        let count = 0;
        for (let idx = 0; idx < data.length; idx++)  {
            const { featured } = data[idx]
            if (!countHistory.includes("featured") && !featured.includes(entity)) {
                countHistory.push(null);
            } else if (countHistory.includes("featured") && !featured.includes(entity)) {
                count += 1;
                countHistory.push(count)
            } else if (featured.includes(entity)) {
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
                        <th>{type[0].toUpperCase() + type.slice(1, -1)}</th>
                        {isFetching === 0 && results[0].status === 'success' && Object.entries(spanHeader(versions)).map(versionNum => (
                        <th key = {versionNum[0]} colSpan = {`${versionNum[1]}`}>{versionNum[0]}</th>
                        ))}
                        </tr>
                </thead>
                <tbody>
                    {isFetching === 0 && results[0].status === 'success' && entityNames.sort().map((entityName, idx) => (
                        <tr key = {idx}>
                            <td key = {entityName}>{entityName}</td>
                            {isFetching === 0 && results[0].status === 'success' && countEntity(history, `${entityName}`).map((entityHistory, idx) => (
                                entityHistory === 'featured' ? 
                                <td key = {idx} style = {{background: 'hsl(253, 100%, 74%)'}}><img src = {getIcon(results, entityName.replace(/[ /-]/g, '_').replace(/'/g, '').toLowerCase())} alt = {`${entityName}`}/></td> : 
                                entityHistory === null ? 
                                <td key = {idx} style = {{background: '#e5ccff'}}>{entityHistory}</td> : 
                                <td key = {idx} style = {{background: `hsl(263, 100%, ${35 - (5.5 * entityHistory) + 30}%)`}}>{entityHistory}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EntityTable;