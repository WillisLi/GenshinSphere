import React from 'react'

function FilterTabs({filters, filterByType}) {
    return (
        <div className = "filter-tabs">
            {filters.map((filter, index) => (
                <button filter = "button" className = {`${filter}`} key = {index} onClick = {filterByType}>{filter}</button>
            ))}
        </div>
    )
}

export default FilterTabs;
