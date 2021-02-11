import React from 'react';
import GridHeaderContainer from './GridHeaderContainer/GridHeaderContainer';
import './GridHeaderStyle.scss'

function GridHeader() {
    return(
    <div className="gridHeader">
        <GridHeaderContainer headValue="Utilizator" columnValues={[{colname: "Prenume", width: 'medium'},{colname: "Nume", width: 'medium'}]} />
        <GridHeaderContainer headValue="Detalii" columnValues={[{colname: "Email", width: 'medium'}, {colname: "Nr Telefon", width: 'medium'}]} />
    </div>)
}

export default GridHeader