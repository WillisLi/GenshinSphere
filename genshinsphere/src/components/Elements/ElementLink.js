import React from 'react'
import useQueryImage from 'hooks/useQueryImage'
import { NavLink } from 'react-router-dom'

const ElementLink = ({index, name}) => {
    const { data, status } = useQueryImage("elements", name, "icon")
    return (
        <div className = "elementCard">
            {status === 'success' && <NavLink to = {`/elements/${name}`} key = {index}>
                <img src = {data} alt = {`${name}`}/>
            </NavLink>}
            <p className = "label">{name}</p>
        </div>
    )
}

export default ElementLink
