import { ISortStats } from '../GridBody/ISortStats';
import { IHeader } from '../GridBody/IHeader';

export interface IGridState {
    all_headers: IHeader[];
    selectedViewItem: string;
    selectedSort: ISortStats;
    visibleHeader: string;
};