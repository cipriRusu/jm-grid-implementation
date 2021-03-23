import { ISortStats } from '../GridBody/ISortStats';
import { IColumn } from '../GridBody/IColumn';
import { IDataType } from '../GridData/IDataType';

export interface IGridState {
    data: IDataType,
    selectedViewItem: string;
    selectedSort: ISortStats;
    visibleHeader: string;
    selectedFilter: IColumn[];
};