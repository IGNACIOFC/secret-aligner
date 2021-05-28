import React from 'react'
import {BsSearch} from "react-icons/bs"
import "./SearchBar.scss"

function SearchBar () {
    return(
        <div className="input-container">
            <BsSearch />
            <input type="text" placeholder="Buscar..."></input>
        </div>
    )
}

export default SearchBar
