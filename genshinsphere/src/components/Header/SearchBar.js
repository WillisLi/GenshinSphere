import React, { useState } from 'react';
import axios from 'axios';
import { useQueries, useIsFetching } from 'react-query';
import { parseString, reverseParseString } from 'utils/utils';
import { useNavigate } from 'react-router-dom';

const searchOptions = [
    "artifacts",
    "characters",
    "elements",
    "weapons",
]

const fetchList = async (type) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${type}`)
    return {type: type, list: data};
}

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSearch, setFilteredSearch] = useState([])
    const searchList = useQueries(searchOptions.map(optionNames => ({
        queryKey: ["options", optionNames],
        queryFn: () => fetchList(optionNames),
        staleTime: 200000,
    }))).map(item => item.data)

    const isFetching = useIsFetching();

    // if (isFetching === 0) {
    //     console.log(searchList)
    // }

    const filterSearch = event => {
        event.preventDefault();
        const input = event.target.value;
        setSearchTerm(input);
        const currentFilter = searchList.map(obj => 
            obj.list.filter(word => 
                reverseParseString(word).toLowerCase().includes(input.toLowerCase())).map(name => {
                    return {
                        type: obj.type,
                        name: name
                    }})).flat().sort((a, b) => a.name > b.name ? 1 : -1)
        if (input === "") {
            setFilteredSearch([]);
        } else {
            setFilteredSearch(currentFilter);
        }
    }

    const setInput = event => {
        const input = event.target.textContent;
        console.log(input)
        setSearchTerm(input);
        const currentFilter = filteredSearch.filter(obj => obj.name === parseString(input)); 
        setFilteredSearch(currentFilter);
        document.getElementById('searchInput').focus();
    }

    const onSubmit = event => {
        event.preventDefault();
        if (filteredSearch.length === 1 && parseString(searchTerm) === filteredSearch[0].name) {
            navigate(`/${filteredSearch[0].type}/${parseString(searchTerm)}`)
            clearSearch();
        }
    }

    const clearSearch = () => {
        setSearchTerm("");
        setFilteredSearch([]);
    }

    return (
        <div className = "searchBar">
            <form onSubmit = {onSubmit} className = "input" autoComplete = "off" spellCheck = "false">
                <input
                    id = "searchInput"
                    type = "text"
                    placeholder = "Search for characters, artifacts, weapons..."
                    value = {searchTerm}
                    onChange = {filterSearch}
                />
            </form>
            <div className = "dropDown">
                {filteredSearch.slice(0, 8).map((searchTerm, index) => (
                    <p key = {index} onClick = {setInput}>{reverseParseString(searchTerm.name)}</p>
                ))}
            </div>
        </div>
    )
}

export default SearchBar
