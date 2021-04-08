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

            let currentCachedItems = gridContext.items;

            let newCache = props.content.get(
                gridContext.sort, 
                gridContext.selectedFilterContext, 
                gridContext.page, 
                props.pageSize)

            gridContext.setItems(currentCachedItems.concat(newCache))

            gridContext.setPage(gridContext.page + 1)
        }
    }

    useEffect(() => {
        gridContext.setPage(0); 

        gridContext.setItems(
            props.content.get(
            gridContext.sort, 
            gridContext.selectedFilterContext, 
            0, 
            props.pageSize))

    },[gridContext.sort.field_id, 
        gridContext.sort.sort_type, 
        gridContext.setSort,
        gridContext.selectedFilterContext, 
        gridContext.setItems,
        props.content,
        props.pageSize
    ])

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
