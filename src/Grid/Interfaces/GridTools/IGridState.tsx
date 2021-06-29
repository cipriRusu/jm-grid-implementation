import { ISortStats } from "../GridBody/ISortStats";
import { IColumn } from "../GridBody/IColumn";
import { IFilter } from "../GridTools/IFilter";
import { IDataSource } from "../GridData/IDataSource";
import { IRow } from "../GridBody/IRow";

export interface IGridState {
  activeFilter: IFilter;
  data: IDataSource;
  bottom: number;
  top: number;
  items: IRow[];
  loadedPages: number;
  selectedViewItem: string;
  selectedSort: ISortStats;
  visibleHeader: string;
  filters: IFilter[];
  toggledColumn: IColumn;
  toggledHeader: IColumn[];
}
