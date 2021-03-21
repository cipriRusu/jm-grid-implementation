import React from 'react';
import { ICell } from "../../Interfaces/GridBody/ICell";
import './Cell.scss';

const Cell = (props: { content: ICell }) => {
    return (
    <div className="cell">
        {props.content.cell_content}
    </div>)
}

export default Cell;