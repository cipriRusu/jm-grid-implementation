import React from 'react';
import './GridRow.scss';
import { IGridEntry } from '../../Interfaces/GridBody/IGridEntry';


const GridRow = (props: any) => {
    return props.rowdata.map((entry: IGridEntry) => { 
        return( 
            [<div className="cell"><p>{entry.prenume}</p></div>,
            <div className="cell"><p>{entry.nume}</p></div>,
            <div className="cell"><p>{entry.email}</p></div>,
            <div className="cell"><p>{entry.telefon}</p></div>]
        )})
}

export default GridRow;