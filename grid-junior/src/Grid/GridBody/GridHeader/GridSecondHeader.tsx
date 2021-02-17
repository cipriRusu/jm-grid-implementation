import React, { useState } from 'react';
import GridHeaderContainer from './GridHeaderContainer';
import './GridHeaderStyle.scss';
import { ColumnData } from './ColumnData';

function SecondHeader() {
    const[clickedState, updateClickState] = useState(0);

    const updateClickHandler = (newValue: number) => newValue < 3 ? 
                                updateClickState(newValue) : 
                                updateClickState(0)

    return(<div className="grid-header">
        <GridHeaderContainer
        headValue="Examinare"
        clickState={clickedState}
        updateClickState={updateClickHandler}
        columnValues={[
            new ColumnData('Status', 'standard'), 
            new ColumnData('Data', 'standard'),
            new ColumnData('Urgenta', 'standard'),
            new ColumnData('Termen Limita', 'standard')]
        } />

        <GridHeaderContainer
        headValue="Detalii Examinare"
        clickState={clickedState}
        updateClickState={updateClickHandler}
        columnValues={[
            new ColumnData('Tip', 'standard'),
            new ColumnData('Centru Imagistica', 'standard'),
            new ColumnData('Rezultate', 'standard'),
            new ColumnData('Imagini', 'standard')]
        } />
    </div>)
}

export default SecondHeader;