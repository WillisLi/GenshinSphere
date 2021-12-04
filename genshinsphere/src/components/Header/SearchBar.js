import React, { useState } from 'react'
import useQueryList from '../../hooks/useQueryList'
import axios from 'axios'
import { useQueries, useIsFetching } from 'react-query'

const searchOptions = [
    "artifacts",
    "characters",
    "elements",
    "weapons",
]

const fetchList = async (type) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${type}`)
    return data;
}

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSearch, setFilteredSearch] = useState([])
    const searchList = useQueries(searchOptions.map(optionNames => ({
        queryKey: ["options", optionNames],
        queryFn: () => fetchList(optionNames),
        staleTime: 200000,
    })))
    const [parsedList, setParsedList] = useState([]);

    const isFetching = useIsFetching();

    if (isFetching === 0 && searchList[0].status === "success") {
        // const list = searchList.map(obj => obj.data)
        // setParsedList(list.flat())
        // console.log(parsedList)
    }

    const filterSearch = () => {
        setFilteredSearch()
    }

    return (
        <div className = "searchBar">
            <input
                type = "text"
                placeholder = "Search for characters, artifacts, weapons..."
                // value = {searchTerm}
                // onChange = {filterSearch}
            />
        </div>
    )
}

export default SearchBar
