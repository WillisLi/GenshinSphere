import React from "react";
import axios from 'axios';
import { useQueries, useIsFetching } from 'react-query';
import { parseString } from "../../../utils/utils";
import './EntityTable.css'

const fetchIcon = async (name, category) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/${category}/${name}/icon`)
    return config.url;
}

const EntityTable = ({entityNames, history, versions, category, type}) => {
    const results = useQueries(entityNames.map(entityName => ({
            queryKey: ["icon", parseString(entityName)],
            queryFn: () => fetchIcon(parseString(entityName), category),
            staleTime: 200000,
    })))
    const isFetching = useIsFetching();

    if (isFetching === 0 && results[0].status === "success") {
        console.log('success');
    }

    const getIcon = (resultsData, entityName) => {
        for (let idx = 0; idx < resultsData.length; idx++) {
            if (resultsData[idx].data.includes(entityName)) {
                return resultsData[idx].data;
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

    const countEntity = (data, entity, type) => {
        const countHistory = []
        let count = 0;
        for (let idx = 0; idx < data.length; idx++)  {
            const typeCheck = data[idx][type]
            if (!countHistory.includes("featured") && !typeCheck.includes(entity)) {
                countHistory.push(null);
            } else if (countHistory.includes("featured") && !typeCheck.includes(entity)) {
                count += 1;
                countHistory.push(count)
            } else if (typeCheck.includes(entity)) {
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
                        <th>{category[0].toUpperCase() + category.slice(1, -1)}</th>
                        {isFetching === 0 && results[0].status === 'success' && Object.entries(spanHeader(versions)).map(versionNum => (
                        <th key = {versionNum[0]} colSpan = {`${versionNum[1]}`}>{versionNum[0]}</th>
                        ))}
                        </tr>
                </thead>
                <tbody>
                    {isFetching === 0 && results[0].status === 'success' && entityNames.sort().map((entityName, idx) => (
                        <tr key = {idx}>
                            <td key = {entityName}>{entityName}</td>
                            {isFetching === 0 && results[0].status === 'success' && countEntity(history, `${entityName}`, type).map((entityHistory, idx) => (
                                entityHistory === 'featured' ? 
                                <td key = {idx} style = {type === 'featured' ? {background: 'hsl(253, 100%, 74%)'} : {background: 'hsl(40, 100%, 74%)'}}><img src = {getIcon(results, parseString(entityName))} alt = {`${entityName}`}/></td> : 
                                entityHistory === null ? 
                                <td key = {idx} style = {type === 'featured' ? {background: '#e5ccff'} : {background: '#ffe5cc'}}>{entityHistory}</td> : 
                                <td key = {idx} style = {type === 'featured' ? {background: `hsl(263, 100%, ${35 - (5.5 * entityHistory) + 30}%)`} : {background: `hsl(40, 100%, ${35 - (5.5 * entityHistory) + 30}%)`}}>{entityHistory}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EntityTable;