import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IRow } from "../GridBody/IRow";
import { IDataSource } from "../GridData/IDataSource";

export interface IGridContext {
    all_headers: IHeader[],
    all_columns: IColumn[],
    data: IDataSource,
    bottom: number,
    items: IRow[],
    setItems: (updatedItems: IRow[]) => void,
    setPage: (newPage: number) => void,
    visibleHeader : string,
    selectViewHandler: (value: string) => void,
    selectedViewItem: Object,
    headersContext: IHeader[],
    filters:  IColumn[],
    setFilter: (values: IColumn[]) => void,
    toggledColumn: IColumn,
    setToggledColumn: (value: IColumn) => void
    toggledHeader: IColumn[],
    setToggledHeader: (value: IColumn[]) => void
} 
