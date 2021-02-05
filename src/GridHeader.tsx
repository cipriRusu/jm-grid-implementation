import React from 'react';
import GridHeaderColumns from './GridHeaderColumns'
import './GridHeaderStyle.scss'

function GridHeader() {
    return(
    <div>
        <div className="Container">
            <div className="HeaderName">
                <p>Utilizator</p>
            </div>
            <div className="HeaderName">
                <p>Detalii</p>
            </div>
        </div>
        <GridHeaderColumns />
    </div>)
}

export default GridHeader