import React from 'react'
import { reverseParseString } from 'utils/utils'

function FilterTabs({filters, filterByType}) {
    return (
        <div className = "filter-tabs">
            {filters.map((filter, index) => (
                <button filter = "button" value = {filter} className = "filterTab" key = {index} onClick = {filterByType}>{typeof(filter) === "number" ? `${filter}★` : reverseParseString(filter)}</button>
            ))}
        </div>
    )
}

export default FilterTabs;
