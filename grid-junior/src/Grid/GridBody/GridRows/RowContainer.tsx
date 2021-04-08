import React, { useContext, useEffect } from 'react';
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

    useEffect(() => {
        if(gridContext.items.length === 0) {
            gridContext.setItems(props.content.get({sort_type: '', field_id: ''},
                                                    [],
                                                    0,
                                                    props.pageSize))
        }
    },[props.content, props.pageSize])

    useEffect(() => {
        gridContext.setItems(props.content.get(gridContext.sort, 
                                               gridContext.selectedFilterContext, 
                                               gridContext.page, 
                                               props.pageSize))
    },[gridContext.selectedFilterContext, 
       gridContext.sort.field_id, 
       gridContext.sort.sort_type,
       props.content, props.pageSize]
    )

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
