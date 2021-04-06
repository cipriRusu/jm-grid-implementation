import React, { useContext, useEffect, useState } from 'react';
import Cell from './Cell';
import './RowContainer.scss';
import { Cell_Type } from '../../CustomTypes/Cell_Type';
import { GridContext } from '../../Grid';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { IDataSource } from '../../Interfaces/GridData/IDataSource';
import { IRow } from '../../Interfaces/GridBody/IRow';

const RowContainer = (props: { content: IDataSource, pageSize: number }) => {
    const gridContext = useContext(GridContext);
    const[page, updatePage] = useState(1);

    useEffect(() => {
        document.addEventListener('scroll', (event: any) => {
            if(event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
                updatePage(page + 1)
            }
        }, true)
    },[page, updatePage, props.pageSize])

    return (<div className="row-container">
        {props.content.get(gridContext.sort, gridContext.selectedFilterContext, page, props.pageSize)
        .map((x: IRow, row_key: number) => {
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