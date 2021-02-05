import React from 'react';
import './GridHeaderColumnsStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function GridHeaderColumns() {
    return(
    <div className="ColumnContainer">
        <div className="Column First">
            <p>Prenume</p>
            <FontAwesomeIcon className="Icon" icon={faFilter}/>
        </div>
        <div className="Column Second">
            <p>Nume</p>
            <FontAwesomeIcon className="Icon" icon={faFilter}/>
        </div>
        <div className="Column Third">
            <p>Email</p>
            <FontAwesomeIcon className="Icon" icon={faFilter}/>
        </div>
        <div className="Column Fourth">
            <p>Nr Telefon</p>
            <FontAwesomeIcon className="Icon" icon={faFilter}/>
        </div>
    </div>)
}

export default GridHeaderColumns