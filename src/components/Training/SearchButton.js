import React from 'react'
import './SearchButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchButton() {
    return (
        <div>
            <button className="search-button"><FontAwesomeIcon icon={faSearch} /> Search</button>
        </div>
    )
}

export default SearchButton