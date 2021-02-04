import React from 'react';
import './GridHeaderStyle.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function GridHeader() {
    return(
    <div className="Container">
        <div className="Element">
            <div className="ElementHeader">
                <p>Utilizator</p>
            </div>
            <div className="ElementContent">
                <div className="ElementCell">
                    <p>Nume</p>
                    <FontAwesomeIcon className="Icon" icon={faFilter} />
                </div>
                <div className="ElementCell">
                    <p>Prenume</p>
                    <FontAwesomeIcon className="Icon" icon={faFilter} />
                </div>
            </div>
        </div>
        <div className="Element">
        <div className="ElementHeader">
                <p>Detalii</p>
            </div>
            <div className="ElementContent">
                <div className="ElementCell">
                <p>Email</p>
                <FontAwesomeIcon className="Icon" icon={faFilter} />
                </div>
                <div className="ElementCell">
                <p>Numar de Telefon</p>
                <FontAwesomeIcon className="Icon" icon={faFilter} />
                </div>
            </div>
        </div>
    </div>)
}

export default GridHeader