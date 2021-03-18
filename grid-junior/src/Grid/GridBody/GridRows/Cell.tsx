import React from 'react';
import { ICell } from "../../Interfaces/GridBody/ICell";
import './Cell.scss';

const Cell = (props: { cell_data: ICell }) => {
    return (
    <div className="cell">
        {props.cell_data.cell_content}
    </div>)
}

export default Cell;