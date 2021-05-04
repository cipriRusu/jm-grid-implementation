import React, { Component, createContext } from "react";
import "./Grid.scss";
import Header from "./GridBody/GridHeader/Header";
import RowContainer from "./GridBody/GridRows/RowContainer";
import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IFilter } from "./Interfaces/GridTools/IFilter";
import { IHeader } from "./Interfaces/GridBody/IHeader";
import { IGridProps } from "./Interfaces/GridBody/IGridProps";
import { IGridState } from "./Interfaces/GridTools/IGridState";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IGridContext } from "./Interfaces/GridTools/IGridContext";
import { ISortable } from "./Interfaces/GridBody/ISortable";
import { IColumnContainer } from "./Interfaces/GridBody/IColumnContainer";
import { IRow } from "./Interfaces/GridBody/IRow";

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

class Grid extends Component<IGridProps, IGridState> {
  state: IGridState = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    selectedViewItem: "",
    selectedSort: {
      sort_type: "",
      field_id: "",
    },
    visibleHeader: "firstHeader",
    filters: [],
    data: this.props.data,
    toggledColumn: {
      name: "",
      size: "",
      type: "",
      toggled: false,
    },
    toggledHeader: [],
    bottom: 0,
    top: -1,
    items: [],
    loadedPages: 0,
  };

  flatHeader = () => {
    let allColumns = this.props.headers
      .filter((x) => x.name === this.state.visibleHeader)
      .map((header: IHeader) => {
        return header.headers.map((columns: IColumnContainer) => {
          return columns.columns.map((column: IColumn) => {
            return column;
          });
        });
      });

    return allColumns.flat().flat();
  };

  setLoaded = (updatedPages: number) => {
    this.setState({ loadedPages: updatedPages });
  };

  setItems = (updatedItems: IRow[]) => {
    this.setState({ items: updatedItems });
  };

  setBottom = (newPage: number): void => {
    this.setState({ bottom: newPage });
  };

  setTop = (newPage: number): void => {
    this.setState({ top: newPage });
  };

  setSort = (selectedSort: ISortStats): void => {
    this.setState({ selectedSort: selectedSort });
  };

  setActiveFilter = (newFilter: IFilter) => {
    this.setState({ activeFilter: newFilter });
  };

  setFilter = (filters: IFilter[]) => {
    this.setState({
      filters: [...filters],
    });
  };

  setToggledColumn = (toggled: IColumn) => {
    this.setState({ toggledColumn: toggled });
  };

  setToggledHeader = (toggled: IColumn[]) => {
    this.setState({ toggledHeader: toggled });
  };

  selectItemHandler = (selectedItem: string) => {
    this.setState({ selectedViewItem: selectedItem });
  };

  render() {
    let allSelectionFilters = this.flatHeader().filter(
      (column) => column.type === "select"
    );

    return (
      <GridContext.Provider
        value={{
          activeFilter: this.state.activeFilter,
          allColumns: this.flatHeader(),
          allHeaders: this.props.headers,
          bottom: this.state.bottom,
          data: this.props.data,
          filters: this.state.filters,
          headersContext: this.props.headers,
          items: this.state.items,
          loadedPages: this.state.loadedPages,
          setLoaded: this.setLoaded,
          setItems: this.setItems,
          setBottom: this.setBottom,
          setTop: this.setTop,
          selectedViewItem: "",
          visibleHeader: this.state.visibleHeader,
          selectViewHandler: this.selectItemHandler,
          sort: this.state.selectedSort,
          setActiveFilter: this.setActiveFilter,
          setSort: this.setSort,
          selectionOptions: allSelectionFilters,
          setFilter: this.setFilter,
          toggledColumn: this.state.toggledColumn,
          setToggledColumn: this.setToggledColumn,
          toggledHeader: this.state.toggledHeader,
          setToggledHeader: this.setToggledHeader,
          top: this.state.top,
        }}
      >
        <Header />
        <RowContainer
          content={this.state.data}
          pageSize={this.props.pageSize}
          pageCache={this.props.cacheSize}
        />
      </GridContext.Provider>
    );
  }
}
export default Grid;
