import React from 'react';
import GridHeaderColumns from './GridHeaderColumns'
import './GridHeaderStyle.scss'

function GridHeader() {
    return(
        <div>
            <div className="globalWrapper">
                <div className="headGrid">
                    <div className="firstHeader">
                        <div className="headerWrapper">
                            <p>Utilizator</p>
                        </div>
                    </div>
                <div className="secondHeader">
                    <div className="headerWrapper">
                        <p>Detalii</p>
                    </div>
                </div>
            </div>
            <GridHeaderColumns />
            </div>
        </div>)
}

export default GridHeader