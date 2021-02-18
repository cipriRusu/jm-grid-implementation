import React from 'react';
import GridHeaderContainer from './GridHeaderContainer';
import './GridHeaderStyle.scss';
import { ColumnData } from './ColumnData';

function SecondHeader(props: any) {
    return(<div className="grid-header">
        <GridHeaderContainer
        headValue="Examinare"
        sort={props.sort}
        setSort={props.setSort}
        columnValues={[
            new ColumnData('Status', 'standard'), 
            new ColumnData('Data', 'standard'),
            new ColumnData('Urgenta', 'standard'),
            new ColumnData('Termen Limita', 'standard')]
        } />

        <GridHeaderContainer
        headValue="Detalii Examinare"
        sort={props.sort}
        setSort={props.setSort}
        columnValues={[
            new ColumnData('Tip', 'standard'),
            new ColumnData('Centru Imagistica', 'standard'),
            new ColumnData('Rezultate', 'standard'),
            new ColumnData('Imagini', 'standard')]
        } />
    </div>)
}

export default SecondHeader;