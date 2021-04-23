import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IRow } from "../GridBody/IRow";
import { IDataSource } from "../GridData/IDataSource";
import { IFilter } from "../GridTools/IFilter";

export interface IGridContext {
  allHeaders: IHeader[];
  allColumns: IColumn[];
  data: IDataSource;
  bottom: number;
  filters: IFilter[];
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
  selectionOptions: IColumn[];
  setFilter: (values: IFilter[]) => void;
  toggledColumn: IColumn;
  setToggledColumn: (value: IColumn) => void;
  toggledHeader: IColumn[];
  setToggledHeader: (value: IColumn[]) => void;
}
