import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchButton() {
    return (
        <div>
            <button className={`${styles.search_button}`}><FontAwesomeIcon icon={faSearch} /> Search</button>
        </div>
    )
}

export default SearchButton
