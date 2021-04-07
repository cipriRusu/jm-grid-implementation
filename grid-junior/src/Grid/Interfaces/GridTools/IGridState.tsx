import { ISortStats } from '../GridBody/ISortStats';
import { IColumn } from '../GridBody/IColumn';
import { IDataSource } from '../GridData/IDataSource';

export interface IGridState {
    data: IDataSource,
    page: number;
    selectedViewItem: string;
    selectedSort: ISortStats;
    visibleHeader: string;
    selectedFilter: IColumn[];
    toggledColumn: IColumn;
    toggledHeader: IColumn[];
};