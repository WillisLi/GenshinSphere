import React from 'react';
import { useParams } from 'react-router-dom';
import useQueryEntityData from 'hooks/useQueryEntityData';
import useQueryImage from 'hooks/useQueryImage';
import Image from 'components/atoms/Image';
import './ElementPage.scss'

const ElementPage = () => {
    const { name } = useParams();
    const { data: element, status} = useQueryEntityData("elements", name);
    const { data: icon, status: iconStatus} = useQueryImage("elements", name, "icon")

    return (
        <div className = "elementPage">
            {status === "success" && iconStatus === "success" &&
            <div className = "elementHeader">
                <h1>{element.name}</h1>
                <img className = {`${name}`} src = {icon} alt = "elementIcon"/>
            </div>}
            <div className = "reactions">
                <h2 style = {{"font-size": "2rem"}}>Reactions</h2>
                {status === "success" && element.reactions.map((reaction, index) => (
                    <div key = {index} className = "reaction">
                        <h3 className = "reactionName">{reaction.name}</h3>
                        {reaction.effect && <p className = "reactionEffect">{reaction.effect}</p>}
                        <div className = "symbols">
                            {reaction.elements.map((element, index) => (
                                <Image index = {index} cat = "elements" name = {element.toLowerCase()} type = "icon"/>
                            ))}
                        </div>
                        <p style={{whiteSpace: "pre-line"}}>{reaction.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ElementPage
