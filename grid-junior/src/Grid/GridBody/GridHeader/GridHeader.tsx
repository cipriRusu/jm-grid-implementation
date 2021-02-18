import React, { useState } from 'react';
import GridHeaderContainer from './GridHeaderContainer';
import './GridHeaderStyle.scss';
import { ColumnData } from './ColumnData';

function GridHeader() {
    const[initialClickState, resetClickState] = useState(0);

    return(
    <div className="grid-header">
        <GridHeaderContainer
        headValue="Utilizator"
        columnValues={[
            new ColumnData('Prenume', 'standard'), 
            new ColumnData('Nume', 'standard')]
        } />

        <GridHeaderContainer 
        headValue="Detalii"
        columnValues={[
            new ColumnData('Email', 'standard'),
            new ColumnData('Nr Telefon', 'standard')]
        } />
    </div>)
}

export default GridHeader