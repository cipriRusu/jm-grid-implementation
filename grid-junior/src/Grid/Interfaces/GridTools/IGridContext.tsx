import { IColumn } from "../GridBody/IColumn";
import { IHeader } from "../GridBody/IHeader";

export interface IGridContext {
    all_headers : IHeader[];
    items : string[],
    visibleHeader : string,
    selectViewHandler: (value: string) => void,
    selectedViewItemContext: string,
    headersContext: IColumn[]
} 
