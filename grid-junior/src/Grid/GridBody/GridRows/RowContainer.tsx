import React from 'react';
import { IRow } from '../../Interfaces/GridBody/IRow';
import Row from './Row';
import './RowContainer.scss';

const RowContainer = (props: { content: IRow[] }) => {
    return (
    <div className="row-container">{props.content.map((x: IRow) => 
        { return (<Row rowdata={x.content}/>) 
        })}
    </div>)
}

export default RowContainer;