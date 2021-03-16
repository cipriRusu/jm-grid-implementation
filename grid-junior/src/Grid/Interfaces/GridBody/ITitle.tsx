import { IColumn } from '../../Interfaces/GridBody/IColumn';

export interface ITitle {
    title: string;
    columns: IColumn[];
    filter?: IColumn;
    update_filter?: (updated_filter: IColumn) => void;
}