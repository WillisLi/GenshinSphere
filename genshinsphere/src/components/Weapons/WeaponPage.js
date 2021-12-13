import React from "react";
import { useParams } from "react-router-dom";
import useQueryEntityData from 'hooks/useQueryEntityData';
import useQueryImage from 'hooks/useQueryImage';
import './WeaponPage.css'
import logo from 'logo.svg'

const WeaponPage = () => {
    const { name } = useParams();
    const { data: weapon, status, isLoading } = useQueryEntityData("weapons", name);
    const { data: icon, status: iconStatus, isLoading: iconLoading} = useQueryImage("weapons", name, "icon");

    if (isLoading || iconLoading) {
        return <div className = "loadingDiv"><img src = {logo} className = "loading" alt = "Loading..." /></div>
    }

    if (status === 'success') {
        console.log(weapon)
    }

    return (
        <div className = "weaponPage">
            {status === "success" && iconStatus === "success" &&
            <div className = "characterHeader">
            <h1>{weapon.name}</h1>
            <div className = "details">
                <div className = "mainImg">
                    <img style = {weapon.rarity === 4 ? {background: 'linear-gradient(110deg, hsl(255, 100%, 70%), hsl(263, 100%, 80%))'} : {background: 'linear-gradient(110deg, hsl(37, 100%, 60%), hsl(43, 79%, 80%)'}} src = {icon} alt = "weaponIcon"/>
                </div>
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
                </div>
            </div>}
        </div>
    )
}

export default WeaponPage;