import React from 'react';
import GridHeaderContainer from './GridHeaderContainer';
import './GridHeaderStyle.scss';
import { ColumnData } from './ColumnData';

function GridHeader(props: any) {
    return(
    <div className="grid-header">
        <GridHeaderContainer
        headValue="Utilizator"
        sort={props.sort}
        setSort={props.setSort}
        columnValues={[
            new ColumnData('Prenume', 'standard'), 
            new ColumnData('Nume', 'standard')]
        } />

        <GridHeaderContainer 
        headValue="Detalii"
        sort={props.sort}
        setSort={props.setSort}
        columnValues={[
            new ColumnData('Email', 'standard'),
            new ColumnData('Nr Telefon', 'standard')]
        } />
    </div>)
}

export default GridHeader