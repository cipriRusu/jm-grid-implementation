import { IColumn } from '../GridBody/IColumn';
import { IRow } from '../GridBody/IRow';
import { ISortStats } from '../GridBody/ISortStats';

export interface IDataSource {
    get: (sort: ISortStats, filters: IColumn[], pageCount: number) => IRow[];
}
