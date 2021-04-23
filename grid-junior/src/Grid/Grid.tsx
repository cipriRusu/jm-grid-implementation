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
  allHeaders: [],
  allColumns: [],
  bottom: 0,
  data: {
    get: (sort: ISortStats, filters: IFilter[]) => [],
    getTotal: (sort: ISortStats, filters: IFilter[]) => 0,
  },
  headersContext: [],
  items: [],
  loadedPages: 0,
  setLoaded: (updatedPages: number) => {},
  setItems: (updatedItems: IRow[]) => {},
  top: -1,
  setTop: (newPage: number) => {},
  setBottom: (newPage: number) => {},
  selectedViewItem: "",
  selectViewHandler: (_value: string) => {},
  sort: { sort_type: "", field_id: "" },
  setSort: (selectedSort: ISortStats) => {},
  filters: [{ name: "", type: "", value: "", operator: 0, selection: [] }],
  selectionOptions: [],
  setFilter: (_values: IFilter[]) => {},
  toggledColumn: { name: "", size: "" },
  setToggledColumn: (value: IColumn) => {},
  toggledHeader: [],
  setToggledHeader: (value: IColumn[]) => {},
  visibleHeader: "",
});

class Grid extends Component<IGridProps, IGridState> {
  state: IGridState = {
    selectedViewItem: "",
    selectedSort: { sort_type: "", field_id: "" },
    visibleHeader: "firstHeader",
    filters: [{ name: "", type: "", value: "", operator: 0, selection: [] }],
    data: this.props.data,
    toggledColumn: { name: "", size: "", type: "", value: "" },
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

  setFilter = (filters: IFilter[]) => {
    this.setState({ filters: [...filters] });
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
          allHeaders: this.props.headers,
          allColumns: this.flatHeader(),
          bottom: this.state.bottom,
          top: this.state.top,
          data: this.props.data,
          items: this.state.items,
          loadedPages: this.state.loadedPages,
          setLoaded: this.setLoaded,
          setItems: this.setItems,
          setBottom: this.setBottom,
          setTop: this.setTop,
          selectedViewItem: "",
          visibleHeader: this.state.visibleHeader,
          selectViewHandler: this.selectItemHandler,
          headersContext: this.props.headers,
          sort: this.state.selectedSort,
          setSort: this.setSort,
          filters: this.state.filters,
          selectionOptions: allSelectionFilters,
          setFilter: this.setFilter,
          toggledColumn: this.state.toggledColumn,
          setToggledColumn: this.setToggledColumn,
          toggledHeader: this.state.toggledHeader,
          setToggledHeader: this.setToggledHeader,
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
