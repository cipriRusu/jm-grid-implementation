import React, {
  Component,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Grid from "./Grid";
import styled from "styled-components";
import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IFilter } from "./Interfaces/GridTools/IFilter";
import { IHeader } from "./Interfaces/GridBody/IHeader";
import { IGridProps } from "./Interfaces/GridBody/IGridProps";
import { IGridState } from "./Interfaces/GridTools/IGridState";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IGridContext } from "./Interfaces/GridTools/IGridContext";
import { ISortable } from "./Interfaces/GridBody/ISortable";
import { IColumns } from "./Interfaces/GridBody/IColumns";
import { IRow } from "./Interfaces/GridBody/IRow";
import Header from "./GridBody/GridHeader/Header";
import Cell from "./GridBody/GridRows/Cell";
import { Cell_Type } from "./CustomTypes/CellType";
import Column from "./GridBody/GridHeader/Column";
import Title from "./GridBody/GridHeader/Title";
import ScrollDirection from "./GridBody/GridRows/ScrollDirection";

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
  selectedViewItem: "",
  selectViewHandler: (_value: string) => {},
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
  visibleHeader: "",
});

const MainGrid = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.inputColumns.map((x) => {
      return props.inputSizes[x.size] + " ";
    })};
  grid-template-rows: repeat(22, 1fr);
  height: 38rem;
  overflow-y: scroll;
  background-color: gray;

  @media (max-width: 50rem) {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

const GridColumn = styled.div`
  @media (max-width: 50rem) {
    display: none;
  }
  background-color: black;
`;

const GridTitle = styled.div<{ spanSize: number }>`
  grid-column: ${(props) => {
    return "span " + props.spanSize;
  }};

  @media (max-width: 50rem) {
    grid-column: unset !important;
  }

  @media (max-width: 30rem) {
    display: none;
  }

  background-color: black;
`;

const GridCell = styled.div<{}>``;

export default function Main<IGridProps, IGridState>(props: any) {
  const [activeFilter, updateActiveFilter] = useState<IFilter>({
    name: "",
    type: "",
    values: [],
    operator: 0,
  });

  const [allPages, updateAllPages] = useState(0);

  const [data, setData] = useState(props.data);

  const [selectedViewItem, updateSelectedViewItem] = useState("");

  const [sort, updateSelectedSort] = useState<ISortStats>({
    sort_type: "",
    field_id: "",
    field_type: "",
  });

  const [visibleHeader, updateVisibleHeader] = useState("firstHeader");

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

  let gridContext = useContext(GridContext);

  const flatHeader = () => {
    let allColumns = props.headers
      .filter((x: any) => x.name === visibleHeader)
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

  const selectItemHandler = (selectedItem: string) => {
    updateSelectedViewItem(selectedItem);
  };

  const loadPage = (
    gridContext: IGridContext & ISortable,
    pageSize: number,
    direction: ScrollDirection
  ) => {
    let scrollingDirection =
      direction === ScrollDirection.Up
        ? top
        : direction === ScrollDirection.Down
        ? bottom
        : 0;

    return props.data.get(sort, filters, scrollingDirection, pageSize);
  };

  const loadOnScroolUp = (event: any) => {
    if (event.target.scrollTop === 0) {
      if (top >= 0) {
        let currentCachedItems = items;

        let newCache = loadPage(
          gridContext,
          props.pageSize,
          ScrollDirection.Up
        );

        let updatedCache = [...newCache, ...currentCachedItems];

        if (updatedCache.length > props.cacheSize) {
          updatedCache = updatedCache.slice(0, props.cacheSize);
        }

        document.getElementById(props.pageSize.toString())?.scrollIntoView();
        updateItems(updatedCache);
        updateLoadedPages(loadedPages - newCache.length);

        updateTop(top - 1);
        updateBottom(bottom - 1);

        console.log(top);
        console.log(bottom);
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
      if (loadedPages < allPages) {
        let currentCachedItems = items;

        let newCache = loadPage(
          gridContext,
          props.pageSize,
          ScrollDirection.Down
        );

        let updatedCache = currentCachedItems.concat(newCache);

        if (updatedCache.length > props.cacheSize) {
          updatedCache.splice(0, props.pageSize);

          document.getElementById(props.pageSize.toString())?.scrollIntoView();

          updateTop(top + 1);
        }

        updateLoadedPages(loadedPages + newCache.length);
        updateItems(updatedCache);
        updateBottom(bottom + 1);

        console.log(top);
        console.log(bottom);
      }
    }
  };

  const UpdateContainer = (event: any) => {
    loadOnScroolUp(event);
    loadOnScroolDown(event);
  };

  useEffect(() => {
    const ReloadData = () => {
      const ResetAllData = () => {};

      ResetAllData();

      let loadingElements = loadPage(
        gridContext,
        props.pageSize,
        ScrollDirection.Initial
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
    props.content,
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
        selectedViewItem: "",
        visibleHeader: visibleHeader,
        selectViewHandler: selectItemHandler,
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
            <MainGrid
              inputColumns={context.allColumns}
              inputSizes={props.headerSize}
              onScroll={(e: any) => UpdateContainer(e)}
            >
              {context.allHeaders[0].headers.map(
                (value: IColumns, key: number) => {
                  return (
                    <GridTitle spanSize={value.columns.length}>
                      <Title
                        key={key}
                        title={value.name}
                        columns={value.columns}
                      />
                    </GridTitle>
                  );
                }
              )}
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
              {context.items.map((x: IRow, row_key: number) =>
                context.allColumns.map((y: IColumn, cell_key: number) => {
                  return (
                    <GridCell>
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
            </MainGrid>
          );
        }}
      </GridContext.Consumer>
    </GridContext.Provider>
  );
}
