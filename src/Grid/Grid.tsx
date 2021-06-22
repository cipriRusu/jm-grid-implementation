import React, { createContext, useEffect, useState } from "react";
import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IFilter } from "./Interfaces/GridTools/IFilter";
import { IHeader } from "./Interfaces/GridBody/IHeader";
import { IGridProps } from "./Interfaces/GridBody/IGridProps";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IGridContext } from "./Interfaces/GridTools/IGridContext";
import { ISortable } from "./Interfaces/GridBody/ISortable";
import { IGrouping } from "./Interfaces/GridBody/IGrouping";
import { IRow } from "./Interfaces/GridBody/IRow";
import Column from "./GridBody/GridHeader/Column";
import Title from "./GridBody/GridHeader/Title";
import ScrollDirection from "./GridBody/GridRows/ScrollDirection";
import MainGridStyled from "./StyledComponents/MainGridStyled";
import GridColumnStyled from "./StyledComponents/GridColumnStyled";
import GridTitleStyled from "./StyledComponents/GridTitleStyled";
import GridRowStyled from "./StyledComponents/GridRowStyled";
import { LoadPage } from "./LoadPage";
import { ScrollPage } from "./ScrollPage";
import { ColumnSizes } from "./CustomTypes/ColumnSizes";
import { MainGridColumnsStyled } from "./StyledComponents/GridColumnsStyled";
import { ColumnCollapsable } from "../Grid/CustomTypes/ColumnCollapsable";
import { MinimumVisibility } from "./CustomTypes/ColumnVisibility";
import ExtendedRow from "./GridBody/GridRows/ExtendedRow";
import CellGrouping from "./GridBody/GridRows/CellGrouping";

const VISIBLEHEADER = "firstHeader";

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
    size: ColumnSizes.StandardColumn,
    collapsable: ColumnCollapsable.collapsable,
    type: "",
    toggled: false,
    minVisibility: MinimumVisibility.SmallVisible,
  },
  toggledHeader: [],
});

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
    size: ColumnSizes.StandardColumn,
    collapsable: ColumnCollapsable.collapsable,
    type: "",
    toggled: false,
    minVisibility: MinimumVisibility.SmallVisible,
  });

  const [toggledHeader, updateToggledHeader] = useState<IColumn[]>([]);

  const [bottom, updateBottom] = useState(0);

  const [top, updateTop] = useState(-1);

  const [items, updateItems] = useState<IRow[]>([]);

  const [loadedPages, updateLoadedPages] = useState(0);

  const [offset, setOffset] = useState(0);

  const [filterUpdate, setFilterUpdate] = useState(0);

  const [isToggled, setIsToggled] = useState<number[]>([]);

  const flatHeader = () => {
    let allColumns = props.headers
      .filter((x: any) => x.name === "firstHeader")
      .map((header: IHeader) => {
        return header.headers.map((columns: IGrouping) => {
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
      field_type: selectedSort.field_type,
    });
  };

  const setActiveFilter = (newFilter: IFilter) => {
    updateActiveFilter(newFilter);
  };

  const setFilter = (filters: IFilter[]) => {
    setFilterUpdate(Math.random());
    updateFilters(filters);
  };

  const setToggledColumn = (toggled: IColumn) => {
    updateToggledColumn(toggled);
  };

  const setToggledHeader = (toggled: IColumn[]) => {
    updateToggledHeader(toggled);
  };

  const checkRowIsToggled = (row_key: number) => {
    return isToggled.includes(row_key) ? "display-extended-row" : "";
  };

  const setToggledRow = (row_key: number) => {
    return isToggled.includes(row_key)
      ? setIsToggled(isToggled.filter((x) => x !== row_key))
      : setIsToggled(isToggled.concat(row_key));
  };

  let loadPage = new LoadPage(props.data);

  let scroolPage = new ScrollPage(props.data);

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

      let loadingElements = loadPage.getPage(ScrollDirection.Initial, {
        pageSize: props.pageSize,
        top: top,
        bottom: bottom,
        sort: sort,
        filters: filters,
      });

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
    filterUpdate,
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
              className="main-grid"
              inputColumns={context.allColumns}
              inputSizes={ColumnSizes}
              onScroll={(e: any) => UpdateContainer(e)}
            >
              {context.allHeaders[0].headers.map(
                (value: IGrouping, key: number) => {
                  return (
                    <GridTitleStyled columns={value.columns} key={key}>
                      <Title
                        key={key}
                        title={value.name}
                        columns={value.columns}
                      />
                    </GridTitleStyled>
                  );
                }
              )}
              <MainGridColumnsStyled columns={context.allColumns}>
                {context.allColumns.map((value: IColumn, key: number) => {
                  return (
                    <GridColumnStyled className={value.minVisibility} key={key}>
                      <Column
                        key={key}
                        name={value.name}
                        size={value.size}
                        type={value.type}
                        minVisibility={value.minVisibility}
                        collapsable={value.collapsable}
                        toggled={false}
                        side={"left-side"}
                      />
                    </GridColumnStyled>
                  );
                })}
              </MainGridColumnsStyled>
              {context.items.map((x: IRow, row_key: number) => (
                <React.Fragment key={row_key.toString() + `-row-container`}>
                  <GridRowStyled
                    id={row_key.toString()}
                    key={row_key}
                    inputColumns={context.allColumns}
                    inputTitles={context.allHeaders}
                    onClick={() => setToggledRow(row_key)}
                  >
                    {context.allHeaders
                      .filter((header: IHeader) => {
                        return header.name === VISIBLEHEADER;
                      })[0]
                      .headers.map((grouping: IGrouping, key: number) => {
                        return grouping.columns.length > 0 ? (
                          <CellGrouping
                            key={key}
                            allData={context.allHeaders}
                            grouping={grouping}
                            row={x}
                          ></CellGrouping>
                        ) : (
                          ""
                        );
                      })}
                  </GridRowStyled>
                  <ExtendedRow
                    id={row_key.toString()}
                    key={row_key.toString() + `-row-extension`}
                    row_key={row_key}
                    allColumns={context.allColumns}
                    completeRow={x}
                    checkToggle={checkRowIsToggled}
                  ></ExtendedRow>
                </React.Fragment>
              ))}
            </MainGridStyled>
          );
        }}
      </GridContext.Consumer>
    </GridContext.Provider>
  );
}
