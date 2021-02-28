import { ISortStats } from '../GridBody/ISortStats';
import { IColumn } from '../GridBody/IColumn';

export interface IGridState {
    selectedViewItem: string;
    selectedSort: ISortStats;
    selectedFilter: IColumn[];
    // selectedFilter: IColumn;
};