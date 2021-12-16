import React from "react";
import { useParams } from "react-router-dom";
import useQueryEntityData from '../../hooks/useQueryEntityData';
import useQueryImage from '../../hooks/useQueryImage';

const ArtifactsPage = () => {
    const { name } = useParams();
    const { data: artifact, status, isLoading } = useQueryEntityData("artifacts", name);
    const { data: icon, status: iconStatus, isLoading: iconLoading} = useQueryImage("artifacts", name, !name.includes("prayers_for_") ? "flower" : "circlet");

    if (status === 'success') {
        console.log(artifact)
    }

    return (
        <div className = "page">
            {status === "success" && iconStatus === "success" &&
            <div className = "artifactHeader">
                <h1>{artifact.name}</h1>
                <div className = "details">
                    <img className = "mainImg" src = {icon} alt = "artifactIcon"/>
                    <table>
                        <tbody>
                            <tr>
                                <th>Rarity</th>
                                <td>
                                    {artifact.rarity.map((rarity, idx) => (
                                        <p key = {idx} style = {{}}>{"★".repeat(artifact.rarity[idx])}</p>)
                                    )}
                                </td>
                            </tr>
                            {artifact.setBonus.length > 1 ? <>
                            <tr>
                                <th>2-piece Bonus</th>
                                <td>{artifact.setBonus[0]}</td>
                            </tr>
                            <tr>
                                <th>4-piece Bonus</th>
                                <td>{artifact.setBonus[1]}</td>
                            </tr></>:
                            <tr>
                            <th>1-piece Bonus</th>
                            <td>{artifact.setBonus[0]}</td>
                            </tr>}
                        </tbody>
                    </table>
                </div>
            </div>}
        </div>
    )
}

export default ArtifactsPage;