import React from 'react';
import GridHeaderContainer from './GridHeaderContainer/GridHeaderContainer';
import './GridHeaderStyle.scss'

function GridHeader() {
    return(
    <div className="grid-header">
        <GridHeaderContainer headValue="Utilizator" columnValues={[{colname: "Prenume", width: 'standard'},{colname: "Nume", width: 'standard'}]} />
        <GridHeaderContainer headValue="Detalii" columnValues={[{colname: "Email", width: 'standard'}, {colname: "Nr Telefon", width: 'standard'}]} />
    </div>)
}

export default GridHeader