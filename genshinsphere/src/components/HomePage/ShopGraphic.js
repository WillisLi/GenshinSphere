import React from 'react';
import useQueryImage from '../../hooks/useQueryImage';
import { parseString } from '../../utils/utils'
import { NavLink } from 'react-router-dom';

const ShopGraphic = ({index, type, name}) => {
    const { data: icon, status: iconStatus} = useQueryImage(`${type}`, parseString(name), "icon");

    return (
        <>
            {iconStatus === 'success' && iconStatus === 'success' &&
            <NavLink to = {`/${type}/${parseString(name)}`} key = {index}>
            <div className = "shopItemDetails">
                <img src = {icon} alt = "shopIcon"/>
                <p>{name}</p>
            </div></NavLink>}
        </>
    )
}

export default ShopGraphic;