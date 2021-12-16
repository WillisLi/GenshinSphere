import React from 'react'

function FilterTabs({filters, filterByType}) {
    return (
        <div className = "filter-tabs">
            {filters.map((filter, index) => (
                <button filter = "button" value = {filter} className = "filterTab" key = {index} onClick = {filterByType}>{typeof(filter) === "number" ? `${filter}★` : filter}</button>
            ))}
        </div>
    )
}

export default FilterTabs;
