import { IRow } from "../GridBody/IRow";
import { ISortStats } from "../GridBody/ISortStats";
import { IFilter } from "../GridTools/IFilter";

export interface IDataSource {
  get: (
    sort: ISortStats,
    filters: IFilter[],
    page: number,
    pageCount: number
  ) => Promise<IRow[]>;

  getTotal: (sort: ISortStats, filters: IFilter[]) => Promise<number>;
}
