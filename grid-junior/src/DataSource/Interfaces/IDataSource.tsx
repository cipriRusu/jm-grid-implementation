import { IRow } from "./IRow";
import { ISortStats } from "./ISortStats";
import { IFilter } from "./IFilter";

export interface IDataSource {
  get: (
    sort: ISortStats,
    filters: IFilter[],
    page: number,
    pageCount: number
  ) => IRow[];

  getTotal: (sort: ISortStats, filters: IFilter[]) => number;
}
