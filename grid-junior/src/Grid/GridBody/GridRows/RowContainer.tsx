import React, { useContext } from 'react';
import Cell from './Cell';
import { Cell_Type } from '../../CustomTypes/Cell_Type';
import { GridContext } from '../../Grid';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { IRow } from '../../Interfaces/GridBody/IRow';
import './RowContainer.scss';

const RowContainer = (props: { content: IRow[] }) => {
    const gridContext = useContext(GridContext);

    return (<div className="row-container">
        {props.content.map((x: IRow) => {
            return<div className='row'>
                {gridContext.all_columns.map((y: IColumn) => {
                    return <Cell content={{cell_content: x[y.name], cell_type: y.type as Cell_Type}} />
                })}
            </div>
        })}
    </div>)
}

export default RowContainer;