import { ColumnSort } from'../../GridBody/GridHeader/ColumnSort';

export interface IColumnHeader {
  sort: ColumnSort;
  setSort: (selectedSort: ColumnSort) => void;
  columnWidth: string;
  columnName: string;
}
