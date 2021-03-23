import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IDataType } from "../GridData/IDataType";

export interface IGridContext {
    all_headers: IHeader[],
    all_columns: IColumn[],
    data: IDataType,
    visibleHeader : string,
    selectViewHandler: (value: string) => void,
    selectedViewItemContext: Object,
    headersContext: IHeader[],
    selectedFilterContext:  IColumn[],
    setFilter: (values: IColumn[]) => void
} 
