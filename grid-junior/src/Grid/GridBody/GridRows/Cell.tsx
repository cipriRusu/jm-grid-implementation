import React from 'react';
import { ICell } from "../../Interfaces/GridBody/ICell";
import './Cell.scss';

const Cell = (props: { content: ICell }) => {
    const ApplyTitleStyling = () => {
        if(props.content.cell_key === 0 || props.content.cell_key === 1) {
            return 'cell title-wrapper';
        }
        else {
            return 'cell';
        }
    }

    return (
    <div className={ApplyTitleStyling()}>
        {props.content.cell_content}
    </div>)
}

export default Cell;