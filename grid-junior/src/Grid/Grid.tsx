import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./Grid.scss";
import Column from "./GridBody/GridHeader/Column";
import { GridContext } from "./Main";
import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IGridContext } from "./Interfaces/GridTools/IGridContext";
import { ISortable } from "./Interfaces/GridBody/ISortable";
import ScrollDirection from "./GridBody/GridRows/ScrollDirection";
import { IRow } from "./Interfaces/GridBody/IRow";
import Cell from "./GridBody/GridRows/Cell";
import { Cell_Type } from "./CustomTypes/CellType";

const MainGrid = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.inputColumns.map((x) => {
      return props.inputSizes[x.size] + " ";
    })};
  height: 38rem;
  overflow-y: scroll;
  background-color: gray;
`;

const GridColumn = styled.div`
  background-color: black;
`;

export default function Grid(props: any) {
  let gridContext = useContext(GridContext);
  const [allPages, updateAllPages] = useState(0);

  const loadPage = (
    gridContext: IGridContext & ISortable,
    pageSize: number,
    direction: ScrollDirection
  ) => {
    let scrollingDirection =
      direction === ScrollDirection.Up
        ? gridContext.top
        : direction === ScrollDirection.Down
        ? gridContext.bottom
        : 0;

    return props.content.get(
      gridContext.sort,
      gridContext.filters,
      scrollingDirection,
      pageSize
    );
  };

  const loadOnScroolUp = (event: any) => {
    if (event.target.scrollTop === 0) {
      if (gridContext.top >= 0) {
        let currentCachedItems = gridContext.items;

        let newCache = loadPage(
          gridContext,
          props.pageSize,
          ScrollDirection.Up
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
  };

  const loadOnScroolDown = (event: any) => {
    const isBottomReached = (event: any) => {
      return (
        event.target.scrollHeight - event.target.scrollTop ===
        event.target.clientHeight
      );
    };

    if (isBottomReached(event)) {
      if (gridContext.loadedPages <= allPages) {
        let currentCachedItems = gridContext.items;

        let newCache = loadPage(
          gridContext,
          props.pageSize,
          ScrollDirection.Down
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

  const UpdateContainer = (event: any) => {
    loadOnScroolUp(event);
    loadOnScroolDown(event);
  };

  useEffect(() => {
    const ReloadData = () => {
      const ResetAllData = () => {
        gridContext.bottom = 0;
        gridContext.top = -1;
        gridContext.setItems([]);
        gridContext.setTop(-1);
        gridContext.setBottom(0);
      };

      ResetAllData();

      let loadingElements = loadPage(
        gridContext,
        props.pageSize,
        ScrollDirection.Initial
      );

      updateAllPages(
        props.content.getTotal(gridContext.sort, gridContext.filters)
      );

      gridContext.setItems(loadingElements);

      gridContext.setLoaded(loadingElements.length);

      if (gridContext.bottom === 0) {
        gridContext.setBottom(1);
      }
    };

    ReloadData();

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
      {(context) => {
        return (
          <MainGrid
            inputColumns={context.allColumns}
            inputSizes={props.headerSize}
            onScroll={(e: any) => UpdateContainer(e)}
          >
            {context.allColumns.map((value: IColumn, key: number) => {
              return (
                <GridColumn>
                  <Column
                    key={key}
                    name={value.name}
                    size={value.size}
                    type={value.type}
                    toggled={false}
                  />
                </GridColumn>
              );
            })}
            {gridContext.items.map((x: IRow, row_key: number) =>
              gridContext.allColumns.map((y: IColumn, cell_key: number) => {
                return (
                  <Cell
                    key={cell_key}
                    content={{
                      id: row_key,
                      cell_content: x[y.name],
                      cell_type: y.type as Cell_Type,
                      cell_key: cell_key,
                      selection_options: y.options,
                    }}
                  />
                );
              })
            )}
          </MainGrid>
        );
      }}
    </GridContext.Consumer>
  );
}
