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
        {props.content.map((x: IRow, row_key: number) => {
            return<div key={row_key} className='row'>
                {gridContext.all_columns.map((y: IColumn, cell_key: number) => {
                    return <Cell key={cell_key} content={{cell_content: x[y.name], 
                                                          cell_type: y.type as Cell_Type,
                                                          cell_key: cell_key}} />
                })}
            </div>
        })}
    </div>)
}

export default RowContainer;