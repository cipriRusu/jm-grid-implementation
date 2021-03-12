import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";
import { IGridEntry } from "../GridBody/IGridEntry";

export interface IGridContext {
    all_headers: IHeader[],
    items: IGridEntry[],
    visibleHeader : string,
    selectViewHandler: (value: string) => void,
    selectedViewItemContext: Object,
    headersContext: IHeader[],
    selectedFilterContext:  IColumn[],
    setFilter: (values: IColumn[]) => void
} 
