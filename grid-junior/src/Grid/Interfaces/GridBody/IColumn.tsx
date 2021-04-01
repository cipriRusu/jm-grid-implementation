export interface IColumn{
    name: string;
    size: string;
    filter?: IColumn;
    update_filter?: (updated_filter: IColumn) => void;
    type?: string;
    value?: string;
    operator?: number;
    toggled?: boolean;
}