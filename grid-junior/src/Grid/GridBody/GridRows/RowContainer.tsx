import React, { useContext } from 'react';
import Cell from './Cell';
import './RowContainer.scss';
import { Cell_Type } from '../../CustomTypes/Cell_Type';
import { GridContext } from '../../Grid';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { IDataSource } from '../../Interfaces/GridData/IDataSource';
import { IRow } from '../../Interfaces/GridBody/IRow';

const RowContainer = (props: { content: IDataSource, pageSize: number }) => {
    const gridContext = useContext(GridContext);

    const UpdateContainer = (event: any) =>  {
        if(event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
            gridContext.setPage(gridContext.page + 1)
        }
    }

    return (
    <GridContext.Consumer>
        {value => 
        <div className="row-container" onScroll={(e: any) => UpdateContainer(e)}>
            {gridContext.items
            .map((x: IRow, row_key: number) => {
                return<div key={row_key} className='row'>
                    {gridContext.all_columns.map((y: IColumn, cell_key: number) => {
                        return <Cell key={cell_key} content={{cell_content: x[y.name], 
                                                              cell_type: y.type as Cell_Type,
                                                              cell_key: cell_key}} />
                    })}
                      </div>
            })}
        </div>}
    </GridContext.Consumer>)
}

export default RowContainer;
