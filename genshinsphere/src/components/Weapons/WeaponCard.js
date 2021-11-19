import React from "react";
import useQueryList from "../../hooks/useQueryList";

const WeaponCard = ({ type }) => {
    const { data: WeaponCard, status: weaponStatus, isLoading: weaponLoading, error: weaponError } = useQueryList('weapons')
    
    return (
        <div>

        </div>
    )
}

export default WeaponCard