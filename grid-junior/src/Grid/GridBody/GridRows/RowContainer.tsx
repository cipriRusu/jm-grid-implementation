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
    const [offsetPage, updateOffset] = useState(-1);

    const UpdateContainer = (event: any) =>  {
        if(event.target.scrollTop === 0) {
            if(offsetPage >= 0) {
                let newCache = props.content.get(
                    gridContext.sort, 
                    gridContext.filters, 
                    offsetPage,
                    props.pageSize)

                let updatedCache = [...newCache, ...gridContext.items];

                if(gridContext.items.length > props.pageCache) {

                    updatedCache.splice(-11, props.pageSize)

                    updateOffset(offsetPage - 1);
                }

                gridContext.setItems(updatedCache)

                gridContext.setPage(gridContext.page - 1)

                document.getElementById((props.pageSize).toString())?.scrollIntoView();
            }
        }

        if(event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
            let currentCachedItems = gridContext.items;

            let newCache = props.content.get(
                gridContext.sort, 
                gridContext.filters,
                gridContext.page,
                props.pageSize)

            let updatedCache = currentCachedItems.concat(newCache);

            if(gridContext.items.length > props.pageCache) {

                updatedCache.splice(0, props.pageSize);

                document.getElementById((props.pageCache - 10).toString())?.scrollIntoView();

                updateOffset(offsetPage + 1);
            }

            gridContext.setItems(updatedCache)

            gridContext.setPage(gridContext.page + 1)
        }
    }

    useEffect(() => {
        gridContext.page = 0;

            gridContext.setItems(
                props.content.get(
                gridContext.sort, 
                gridContext.filters, 
                0,
                props.pageSize))

        if(gridContext.page === 0) {
            gridContext.setPage(1)
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
