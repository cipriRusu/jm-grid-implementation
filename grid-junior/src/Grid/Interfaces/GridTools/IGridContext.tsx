import { IColumn } from "../GridBody/IColumn";
import { IColumns } from "./IColumns";

export interface IGridContext {
    items : string[],
    selectViewHandler: (value: string) => void,
    selectedViewItemContext: string,
    headersContext: IColumn[]
} 
