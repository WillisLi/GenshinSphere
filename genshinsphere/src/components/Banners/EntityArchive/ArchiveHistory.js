import React from 'react'
import useQueryEntityData from '../../../hooks/useQueryEntityData';
import logo from '../../../logo.svg'
import './ArchiveHistory.css'
import EntityTable from './EntityTable';

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
            {status === "success" &&
            <EntityTable entityNames = {propList(data, `${type}`)} history = {data} versions = {propList(data, "version")} category = {`${cat}s`} type = {`${type}`}/>
            }
        </div>
    );
}

export default ArchiveHistory;