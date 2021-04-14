import React, { useContext, useEffect, useState } from 'react';
import Cell from './Cell';
import './RowContainer.scss';
import { Cell_Type } from '../../CustomTypes/Cell_Type';
import { GridContext } from '../../Grid';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { IDataSource } from '../../Interfaces/GridData/IDataSource';
import { IRow } from '../../Interfaces/GridBody/IRow';

const RowContainer = (props: { content: IDataSource, pageSize: number, pageCache: number }) => {
    const gridContext = useContext(GridContext);

    const UpdateContainer = (event: any) =>  {
        if(event.target.scrollTop === 0) {

        }


        if(event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
            if(props.content.getCount(gridContext.sort, gridContext.filters, gridContext.bottom, props.pageSize)) {

                let currentCachedItems = gridContext.items;

                let newCache = props.content.get(gridContext.sort, 
                                                 gridContext.filters, 
                                                 gridContext.bottom, 
                                                 props.pageSize)

                let updatedCache = currentCachedItems.concat(newCache)

                if(updatedCache.length > props.pageCache) {

                    updatedCache.splice(0, props.pageSize)

                    document.getElementById((props.pageSize + 1).toString())?.scrollIntoView();
                }

                gridContext.setItems(updatedCache)

                gridContext.setBottom(gridContext.bottom + 1);
            }
        }
    }

    useEffect(() => {
        gridContext.bottom = 0;

            gridContext.setItems(
                props.content.get(
                gridContext.sort, 
                gridContext.filters, 
                0,
                props.pageSize))

        if(gridContext.bottom === 0) {
            gridContext.setBottom(1)
        }

    },[gridContext.sort.field_id, 
        gridContext.sort.sort_type, 
        gridContext.setSort,
        gridContext.filters, 
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
                return<div id={row_key.toString()} key={row_key} className='row'>
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
