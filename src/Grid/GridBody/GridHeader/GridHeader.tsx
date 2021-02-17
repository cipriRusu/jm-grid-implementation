import React, { useState } from 'react';
import GridHeaderContainer from './GridHeaderContainer';
import './GridHeaderStyle.scss';
import { ColumnData } from './ColumnData';

function GridHeader() {
    const[clickedState, updateClickState] = useState(0);

    const updateClickHandler = (newValue: number) => newValue < 3 ? 
                                updateClickState(newValue) : 
                                updateClickState(0)
                                
    return(
    <div className="grid-header">
        <GridHeaderContainer
        headValue="Utilizator"
        clickState={clickedState}
        updateClickState={updateClickHandler}
        columnValues={[
            new ColumnData('Prenume', 'standard'), 
            new ColumnData('Nume', 'standard')]
        } />

        <GridHeaderContainer 
        headValue="Detalii"
        clickState={clickedState}
        updateClickState={updateClickState}
        columnValues={[
            new ColumnData('Email', 'standard'),
            new ColumnData('Nr Telefon', 'standard')]
        } />
    </div>)
}

export default GridHeader