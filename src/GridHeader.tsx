import React from 'react';
import GridHeaderColumns from './GridHeaderColumns'
import './GridHeaderStyle.scss'

function GridHeader() {
    return(
    <div>
        <div className="Container">
            <div className="firstHeader">
                <p>Utilizator</p>
            </div>
            <div className="secondHeader">
                <p>Detalii</p>
            </div>
        </div>
        <GridHeaderColumns />
    </div>)
}

export default GridHeader