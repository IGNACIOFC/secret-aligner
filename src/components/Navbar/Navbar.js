import React from 'react'
import {VscAccount} from "react-icons/vsc"
import "./Navbar.scss"

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div>
                    <VscAccount className="profile-icon"/>
                </div>
                <a href="#">Dr Pablo Kehyaian</a>
            </div>
        </div>
    )
}

export default Navbar