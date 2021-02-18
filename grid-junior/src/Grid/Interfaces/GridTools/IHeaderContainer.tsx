import { ColumnData } from '../../GridBody/GridHeader/ColumnData';
import { ColumnSort } from '../../GridBody/GridHeader/ColumnSort';

export interface IHeaderContainer {
    sort: ColumnSort;
    setSort: () => void;
    headValue: string;
    columnValues: Array<ColumnData>;
}
