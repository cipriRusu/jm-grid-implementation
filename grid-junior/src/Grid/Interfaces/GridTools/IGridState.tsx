import { ISortStats } from '../GridBody/ISortStats';
import { IColumn } from '../GridBody/IColumn';
import { IDataSource } from '../GridData/IDataSource';
import { IRow } from '../GridBody/IRow';

export interface IGridState {
    data: IDataSource,
    bottom: number;
    top: number;
    items: IRow[];
    selectedViewItem: string;
    selectedSort: ISortStats;
    visibleHeader: string;
    selectedFilter: IColumn[];
    toggledColumn: IColumn;
    toggledHeader: IColumn[];
};