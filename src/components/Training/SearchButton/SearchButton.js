import React from 'react'
import classes from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchButton() {
    return (
        <>
            <button className={`${classes.search_button}`}><FontAwesomeIcon icon={faSearch} /> Search</button>
        </>
    )
}

export default SearchButton
