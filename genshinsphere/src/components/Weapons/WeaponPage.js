import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useQueryEntityData from 'hooks/useQueryEntityData';
import useQueryImageTypes from "hooks/useQueryImageTypes";
import FilterTabs from "components/atoms/FilterTabs";
import Loading from "components/atoms/Loading";
import Image from "components/atoms/Image";
import './WeaponPage.scss'

const WeaponPage = () => {
    const { name } = useParams();
    const { data: weapon, status, isLoading } = useQueryEntityData("weapons", name);
    const { data: imageTypes, status: imageStatus, isLoading: imgLoading} = useQueryImageTypes("weapons", name)
    const [ filterType, setFilterType ] = useState('icon');

    if (isLoading || imgLoading) {
        return <Loading />
    }

    if (status === 'success') {
        console.log(weapon)
    }

    const filterImages = event => {
        const type = event.target.value;
        setFilterType(`${type}`)
    }

    return (
        <div className = "page">
            <h1>{weapon.name}</h1>
            {status === "success" && imageStatus === "success" &&
            <div className = "weaponHeader">
                <div className = "imageContainer">
                    <FilterTabs filters = {imageTypes} filterByType = {filterImages}/>
                    <Image index = {1} cat = "weapons" name = {name} type = {filterType}/>
                </div>
                {/* <img style = {weapon.rarity === 4 ? {background: 'linear-gradient(110deg, hsl(255, 100%, 70%), hsl(263, 100%, 80%))'} : {background: 'linear-gradient(110deg, hsl(37, 100%, 60%), hsl(43, 79%, 80%)'}} src = {icon} alt = "weaponIcon"/> */}
                <table>
                    <tbody>
                        <tr>
                            <th>Rarity</th>
                            <td>{"★".repeat(weapon.rarity)}</td>
                        </tr>
                        <tr>
                            <th>Base Attack</th>
                            <td>{weapon.baseAttack}</td>
                        </tr>
                        <tr>
                            <th>Main Stat</th>
                            <td>{weapon.ascensionStat + " %"}</td>
                        </tr>
                        <tr>
                            <th>{weapon.ascensionStat}</th>
                            <td>{weapon.ascensionStatValue + "%"}</td>
                        </tr>
                        <tr>
                            <th>Passive</th>
                            <td>{weapon.passive}</td>
                        </tr>
                        <tr>
                            <th>Passive Description</th>
                            <td>{weapon.passiveDesc}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{weapon.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default WeaponPage;