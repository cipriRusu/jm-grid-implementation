import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IColumns } from "./IColumns";

export interface IGridContext {
    items : string[],
    selectViewHandler: (value: string) => void,
    selectedViewItemContext: string,
    headersContext: IHeader[],
    // selectedFilterContext: string,
    selectedFilterContext:  IColumn,
    setFilter: (value: IColumn) => void
} 
