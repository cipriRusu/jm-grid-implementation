import { ISortStats } from '../GridBody/ISortStats';
import { IColumn } from '../GridBody/IColumn';
import { IGridEntry } from '../GridBody/IGridEntry';

export interface IGridState {
    selectedViewItem: string;
    selectedSort: ISortStats;
    visibleHeader: string;
    selectedFilter: IColumn[];
    local_items: IGridEntry[];
};