import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IRow } from "../GridBody/IRow";

export interface IGridContext {
    all_headers: IHeader[],
    all_columns: string[],
    items: IRow[],
    visibleHeader : string,
    selectViewHandler: (value: string) => void,
    selectedViewItemContext: Object,
    headersContext: IHeader[],
    selectedFilterContext:  IColumn[],
    setFilter: (values: IColumn[]) => void
} 
