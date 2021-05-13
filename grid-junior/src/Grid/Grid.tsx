import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Cell_Type } from "./CustomTypes/CellType";
import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IFilter } from "./Interfaces/GridTools/IFilter";
import { IHeader } from "./Interfaces/GridBody/IHeader";
import { IGridProps } from "./Interfaces/GridBody/IGridProps";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IGridContext } from "./Interfaces/GridTools/IGridContext";
import { ISortable } from "./Interfaces/GridBody/ISortable";
import { IColumns } from "./Interfaces/GridBody/IColumns";
import { IRow } from "./Interfaces/GridBody/IRow";
import Cell from "./GridBody/GridRows/Cell";
import Column from "./GridBody/GridHeader/Column";
import Title from "./GridBody/GridHeader/Title";
import ScrollDirection from "./GridBody/GridRows/ScrollDirection";
import MainGridStyled from "./MainGridStyled";
import GridColumnStyled from "./GridColumnStyled";
import GridTitleStyled from "./GridTitleStyled";
import { LoadPage } from "./LoadPage";
import { ScrollPage } from "./ScrollPage";

export const GridContext = createContext<IGridContext & ISortable>({
  activeFilter: {
    name: "",
    type: "",
    values: [],
    operator: 0,
  },
  allHeaders: [],
  allColumns: [],
  bottom: 0,
  data: {
    get: (sort: ISortStats, filters: IFilter[]) => [],
    getTotal: (sort: ISortStats, filters: IFilter[]) => 0,
  },
  filters: [],
  headersContext: [],
  items: [],
  loadedPages: 0,
  setLoaded: (updatedPages: number) => {},
  setItems: (updatedItems: IRow[]) => {},
  setTop: (newPage: number) => {},
  setBottom: (newPage: number) => {},
  sort: {
    sort_type: "",
    field_id: "",
    field_type: "",
  },
  setSort: (selectedSort: ISortStats) => {},
  selectionOptions: [],
  setActiveFilter: (newFilter: IFilter) => {},
  setFilter: (_values: IFilter[]) => {},
  setToggledColumn: (value: IColumn) => {},
  setToggledHeader: (value: IColumn[]) => {},
  top: -1,
  toggledColumn: {
    name: "",
    size: "",
    type: "",
    toggled: false,
  },
  toggledHeader: [],
});

const GridCell = styled.div<{}>``;

export default function Grid(props: IGridProps) {
  const [activeFilter, updateActiveFilter] = useState<IFilter>({
    name: "",
    type: "",
    values: [],
    operator: 0,
  });

  const [allPages, updateAllPages] = useState(0);

  const [sort, updateSelectedSort] = useState<ISortStats>({
    sort_type: "",
    field_id: "",
    field_type: "",
  });

  const [filters, updateFilters] = useState<IFilter[]>([]);

  const [toggledColumn, updateToggledColumn] = useState<IColumn>({
    name: "",
    size: "",
    type: "",
    toggled: false,
  });

  const [toggledHeader, updateToggledHeader] = useState<IColumn[]>([]);

  const [bottom, updateBottom] = useState(0);

  const [top, updateTop] = useState(-1);

  const [items, updateItems] = useState<IRow[]>([]);

  const [loadedPages, updateLoadedPages] = useState(0);

  const [offset, setOffset] = useState(0);

  const flatHeader = () => {
    let allColumns = props.headers
      .filter((x: any) => x.name === "firstHeader")
      .map((header: IHeader) => {
        return header.headers.map((columns: IColumns) => {
          return columns.columns.map((column: IColumn) => {
            return column;
          });
        });
      });

    return allColumns.flat().flat();
  };

  const setLoaded = (updatedPages: number) => {
    updateLoadedPages(updatedPages);
  };

  const setItems = (updatedItems: IRow[]) => {
    updateItems(updatedItems);
  };

  const setBottom = (newPage: number): void => {
    updateBottom(newPage);
  };

  const setTop = (newPage: number): void => {
    updateTop(newPage);
  };

  const setSort = (selectedSort: ISortStats): void => {
    updateSelectedSort({
      sort_type: selectedSort.sort_type,
      field_id: selectedSort.field_id,
      field_type: selectedSort.sort_type,
    });
  };

  const setActiveFilter = (newFilter: IFilter) => {
    updateActiveFilter(newFilter);
  };

  const setFilter = (filters: IFilter[]) => {
    updateFilters(filters);
  };

  const setToggledColumn = (toggled: IColumn) => {
    updateToggledColumn(toggled);
  };

  const setToggledHeader = (toggled: IColumn[]) => {
    updateToggledHeader(toggled);
  };

  let loadPage = new LoadPage(props.data);

  let scroolPage = new ScrollPage(props.data, loadPage);

  const loadOnScroolUp = (event: any) => {
    scroolPage.scrollUp(
      event,
      items,
      loadedPages,
      top,
      bottom,
      props.cacheSize,
      props.pageSize,
      sort,
      filters,
      updateTop,
      updateBottom,
      updateItems,
      updateLoadedPages,
      setOffset
    );
  };

  const loadOnScroolDown = (event: any) => {
    scroolPage.scrollDown(
      event,
      items,
      loadedPages,
      top,
      bottom,
      props.cacheSize,
      props.pageSize,
      sort,
      filters,
      updateTop,
      updateBottom,
      updateItems,
      updateLoadedPages,
      setOffset,
      offset,
      allPages
    );
  };

  const UpdateContainer = (event: any) => {
    loadOnScroolUp(event);
    loadOnScroolDown(event);
  };

  useEffect(() => {
    const ReloadData = () => {
      const ResetAllData = () => {
        setBottom(1);
        setItems([]);
        setOffset(0);
        setTop(-1);
      };

      ResetAllData();

      let loadingElements = loadPage.getPage(
        props.pageSize,
        ScrollDirection.Initial,
        top,
        bottom,
        sort,
        filters
      );

      updateAllPages(props.data.getTotal(sort, filters));

      updateItems(loadingElements);

      updateLoadedPages(loadingElements.length);

      if (bottom === 0) {
        updateBottom(1);
      }
    };

    ReloadData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filters,
    sort.field_id,
    sort.field_type,
    sort.sort_type,
    props.data,
    props.pageSize,
  ]);

  return (
    <GridContext.Provider
      value={{
        activeFilter: activeFilter,
        allColumns: flatHeader(),
        allHeaders: props.headers,
        bottom: bottom,
        data: props.data,
        filters: filters,
        headersContext: props.headers,
        items: items,
        loadedPages: loadedPages,
        setLoaded: setLoaded,
        setItems: setItems,
        setBottom: setBottom,
        setTop: setTop,
        sort: sort,
        setActiveFilter: setActiveFilter,
        setSort: setSort,
        selectionOptions: flatHeader().filter(
          (column: any) => column.type === "select"
        ),
        setFilter: setFilter,
        toggledColumn: toggledColumn,
        setToggledColumn: setToggledColumn,
        toggledHeader: toggledHeader,
        setToggledHeader: setToggledHeader,
        top: top,
      }}
    >
      <GridContext.Consumer>
        {(context) => {
          return (
            <MainGridStyled
              inputColumns={context.allColumns}
              inputSizes={props.headerSize}
              onScroll={(e: any) => UpdateContainer(e)}
            >
              {context.allHeaders[0].headers.map(
                (value: IColumns, key: number) => {
                  return (
                    <GridTitleStyled spanSize={value.columns.length} key={key}>
                      <Title
                        key={key}
                        title={value.name}
                        columns={value.columns}
                      />
                    </GridTitleStyled>
                  );
                }
              )}
              {context.allColumns.map((value: IColumn, key: number) => {
                return (
                  <GridColumnStyled key={key}>
                    <Column
                      key={key}
                      name={value.name}
                      size={value.size}
                      type={value.type}
                      toggled={false}
                    />
                  </GridColumnStyled>
                );
              })}
              {context.items.map((x: IRow, row_key: number) =>
                context.allColumns.map((y: IColumn, cell_key: number) => {
                  return (
                    <GridCell key={cell_key}>
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
                    </GridCell>
                  );
                })
              )}
            </MainGridStyled>
          );
        }}
      </GridContext.Consumer>
    </GridContext.Provider>
  );
}
