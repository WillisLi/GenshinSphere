import React from "react";
import useQueryList from "../../hooks/useQueryList";

const WeaponList = ({ type }) => {
    const { data: weaponList, status: weaponStatus, isLoading: weaponLoading, error: weaponError } = useQueryList('weapons')
    
    return (
        <div>

        </div>
    )
}

export default WeaponList