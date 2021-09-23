import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchCharacter = async (key, characterName) => {
    const { data } = await axios.get(`https://api.genshin.dev/characters/${characterName}`)
    return data;
}

const CharacterPage = (props) => {
    const { characterName } = props;
    // const { data: character, status, isLoading, error } = useQuery(['characters', characterName], fetchCharacter)
    console.log(characterName)
    return (
        <div>

        </div>
    )
}

export default CharacterPage;