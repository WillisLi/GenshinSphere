import React from "react";
import './Maintenance.css'
import '../../index.css'
import sorry from './sorry.png'

const Maintenance = () => {
    return (
        <div className = "maintenancePage">
            <img src = {sorry} alt="maintenanceImg"/>
            <p>Sorry...</p>
            <p>this page is under maintenance</p>
        </div>
    )
}

export default Maintenance;