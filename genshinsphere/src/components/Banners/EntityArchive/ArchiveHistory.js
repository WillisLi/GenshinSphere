import React from 'react'
import EntityTable from './EntityTable';
import useQueryEntityData from 'hooks/useQueryEntityData';
import { reverseParseString } from 'utils/utils';
import './ArchiveHistory.css'

const ArchiveHistory = ({cat, type}) => {
    const { data, status, isLoading, error} = useQueryEntityData("banners", cat)

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
            <h1>{type === "limited" ? reverseParseString(type) + ` 5-Star ${reverseParseString(cat)} History`: reverseParseString(type) + ` 4-Star ${reverseParseString(cat)} History`}</h1>
            {status === "success" &&
            <EntityTable entityNames = {propList(data, `${type}`)} history = {data} versions = {propList(data, "version")} category = {`${cat}s`} type = {`${type}`}/>
            }
        </div>
    );
}

export default ArchiveHistory;