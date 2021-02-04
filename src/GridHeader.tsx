import React from 'react';
import './GridHeaderStyle.sass'

function GridHeader() {
    return(
    <div className="Container">
        <div className="Element">
            <div className="ElementHeader">
                <p>Utilizator</p>
            </div>
            <div className="ElementContent">
                <p>Nume</p>
                <p>Prenume</p>
            </div>
        </div>
        <div className="Element">
        <div className="ElementHeader">
                <p>Detalii</p>
            </div>
            <div className="ElementContent">
                <p>Email</p>
                <p>Numar de Telefon</p>
            </div>
        </div>
    </div>)
}

export default GridHeader