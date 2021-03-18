import React from 'react';
import { ICell } from '../../Interfaces/GridBody/ICell';
import Cell from './Cell';
import './Row.scss';

const Row = (props: { rowdata: ICell[] }) => {
    return (
    <div className="row">{props.rowdata.map((x: ICell) => 
        { return <Cell cell_data={x}/> })}
    </div>)
}

export default Row;