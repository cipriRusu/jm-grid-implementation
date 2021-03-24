import { IColumn } from '../GridBody/IColumn';
import { IRow } from '../GridBody/IRow';
import { ISortStats } from '../GridBody/ISortStats';

export interface IDataType {
    get: (sort: ISortStats, filters: IColumn[]) => IRow[];
}
