import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IColumns } from "./IColumns";

export interface IGridContext {
    all_headers: IHeader[],
    items: Object[],
    visibleHeader : string,
    selectViewHandler: (value: string) => void,
    selectedViewItemContext: Object,
    headersContext: IHeader[],
    selectedFilterContext:  IColumn[],
    setFilter: (values: IColumn[]) => void
} 
