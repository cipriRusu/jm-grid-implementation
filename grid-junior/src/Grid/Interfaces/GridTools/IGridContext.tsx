import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IDataSource } from "../GridData/IDataSource";

export interface IGridContext {
    all_headers: IHeader[],
    all_columns: IColumn[],
    data: IDataSource,
    visibleHeader : string,
    selectViewHandler: (value: string) => void,
    selectedViewItemContext: Object,
    headersContext: IHeader[],
    selectedFilterContext:  IColumn[],
    setFilter: (values: IColumn[]) => void,
    toggledFilter: string,
    setToggled: (value: string) => void
} 
