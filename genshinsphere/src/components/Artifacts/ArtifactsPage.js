import React from "react";
import { useParams } from "react-router-dom";
import useQueryEntityData from '../../hooks/useQueryEntityData';
import useQueryImage from '../../hooks/useQueryImage';
import logo from '../../logo.svg'

const ArtifactsPage = () => {
    const { name } = useParams();
    const { data: artifact, status, isLoading } = useQueryEntityData("artifacts", name);
    const { data: icon, status: iconStatus, isLoading: iconLoading} = useQueryImage("artifacts", name, !name.includes("prayers_for_") ? "flower" : "circlet");

    if (isLoading || iconLoading) {
        return <div className = "loadingDiv"><img src = {logo} className = "loading" alt = "Loading..." /></div>
    }

    if (status === 'success') {
        console.log(artifact)
    }

    return (
        <div>
            {status === "success" && iconStatus === "success" &&
            <div className = "characterHeader">
                <h1>{artifact.name}</h1>
            <div className = "details">
                <div className = "mainImg">
                    <img src = {icon} alt = "artifactIcon"/>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Rarity</th>
                            <td>{artifact.rarity} Star</td>
                        </tr>
                        <tr>
                            <th>2-piece Bonus</th>
                            <td>{artifact.setBonus[0]}</td>
                        </tr>
                        <tr>
                            <th>4-piece Bonus</th>
                            <td>{artifact.setBonus[1]}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>}
        </div>
    )
}

export default ArtifactsPage;