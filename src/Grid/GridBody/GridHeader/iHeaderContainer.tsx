export interface iColumnValue {
    colname: string, 
    width: string
}

export interface iHeaderContainer {
    headValue: string;
    columnValues: Array<iColumnValue>;
}
