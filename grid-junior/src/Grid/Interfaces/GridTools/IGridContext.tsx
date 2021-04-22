import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IRow } from "../GridBody/IRow";
import { IDataSource } from "../GridData/IDataSource";

export interface IGridContext {
  allHeaders: IHeader[];
  allColumns: IColumn[];
  data: IDataSource;
  bottom: number;
  top: number;
  items: IRow[];
  loadedPages: number;
  setLoaded: (updatedPages: number) => void;
  setItems: (updatedItems: IRow[]) => void;
  setBottom: (newPage: number) => void;
  setTop: (newPage: number) => void;
  visibleHeader: string;
  selectViewHandler: (value: string) => void;
  selectedViewItem: Object;
  headersContext: IHeader[];
  filters: IColumn[];
  selectionFilters: string[];
  selectionOptions: IColumn[];
  setFilter: (values: IColumn[]) => void;
  setSelectionFilters: (filters: string[]) => void;
  toggledColumn: IColumn;
  setToggledColumn: (value: IColumn) => void;
  toggledHeader: IColumn[];
  setToggledHeader: (value: IColumn[]) => void;
}
