import React, { useContext, useEffect, useState } from "react";
import Cell from "./Cell";
import "./RowContainer.scss";
import { Cell_Type } from "../../CustomTypes/Cell_Type";
import { GridContext } from "../../Grid";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IDataSource } from "../../Interfaces/GridData/IDataSource";
import { IRow } from "../../Interfaces/GridBody/IRow";

const RowContainer = (props: {
  content: IDataSource;
  pageSize: number;
  pageCache: number;
}) => {
  const gridContext = useContext(GridContext);
  const [allPages, updateAllPages] = useState(0);

  const UpdateContainer = (event: any) => {
    if (event.target.scrollTop === 0) {
      if (gridContext.top >= 0) {
        let currentCachedItems = gridContext.items;

        let newCache = props.content.get(
          gridContext.sort,
          gridContext.filters,
          gridContext.top,
          props.pageSize
        );

        let updatedCache = [...newCache, ...currentCachedItems];

        if (updatedCache.length > props.pageCache) {
          updatedCache = updatedCache.slice(0, props.pageCache);
        }

        document.getElementById(props.pageSize.toString())?.scrollIntoView();

        gridContext.setItems(updatedCache);

        gridContext.setLoaded(gridContext.loadedPages - newCache.length);

        gridContext.setTop(gridContext.top - 1);

        gridContext.setBottom(gridContext.bottom - 1);
      }
    }

    if (
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight
    ) {
      if (gridContext.loadedPages <= allPages) {
        let currentCachedItems = gridContext.items;

        let newCache = props.content.get(
          gridContext.sort,
          gridContext.filters,
          gridContext.bottom,
          props.pageSize
        );

        let updatedCache = currentCachedItems.concat(newCache);

        if (updatedCache.length > props.pageCache) {
          updatedCache.splice(0, props.pageSize);

          document.getElementById(props.pageSize.toString())?.scrollIntoView();

          gridContext.setTop(gridContext.top + 1);
        }

        gridContext.setLoaded(gridContext.loadedPages + newCache.length);

        gridContext.setItems(updatedCache);

        gridContext.setBottom(gridContext.bottom + 1);
      }
    }
  };

  useEffect(() => {
    gridContext.bottom = 0;

    gridContext.top = -1;

    gridContext.setItems([]);

    gridContext.setTop(-1);

    gridContext.setBottom(0);

    let loadingElements = props.content.get(
      gridContext.sort,
      gridContext.filters,
      0,
      props.pageSize
    );

    updateAllPages(
      props.content.getTotal(gridContext.sort, gridContext.filters)
    );

    gridContext.setItems(loadingElements);

    gridContext.setLoaded(loadingElements.length);

    if (gridContext.bottom === 0) {
      gridContext.setBottom(1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    gridContext.sort.field_id,
    gridContext.sort.sort_type,
    gridContext.filters,
    gridContext.setSort,
    gridContext.setFilter,
    gridContext.setItems,
    gridContext.setLoaded,
    props.content,
    props.pageSize,
  ]);

  return (
    <GridContext.Consumer>
      {(value) => (
        <div
          className="row-container"
          onScroll={(e: any) => UpdateContainer(e)}
        >
          {gridContext.items.map((x: IRow, row_key: number) => {
            return (
              <div id={row_key.toString()} key={row_key} className="row">
                {gridContext.allColumns.map((y: IColumn, cell_key: number) => {
                  return (
                    <Cell
                      key={cell_key}
                      content={{
                        cell_content: x[y.name],
                        cell_type: y.type as Cell_Type,
                        cell_key: cell_key,
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </GridContext.Consumer>
  );
};

export default RowContainer;
