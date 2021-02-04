import React from 'react';
import './GridHeaderColumnsStyle.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function GridHeaderColumns() {
    return(
    <div className="ColumnContainer">
        <div className="Column">
            <p>Prenume</p>
            <FontAwesomeIcon className="Icon" icon={faFilter}/>
        </div>
        <div className="Column">
            <p>Prenume</p>
            <FontAwesomeIcon className="Icon" icon={faFilter}/>
        </div>
        <div className="Column">
            <p>Prenume</p>
            <FontAwesomeIcon className="Icon" icon={faFilter}/>
        </div>
        <div className="Column">
            <p>Prenume</p>
            <FontAwesomeIcon className="Icon" icon={faFilter}/>
        </div>
    </div>)
}

export default GridHeaderColumns