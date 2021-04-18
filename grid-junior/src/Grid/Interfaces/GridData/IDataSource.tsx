import { IColumn } from "../GridBody/IColumn";
import { IRow } from "../GridBody/IRow";
import { ISortStats } from "../GridBody/ISortStats";

export interface IDataSource {
  get: (
    sort: ISortStats,
    filters: IColumn[],
    page: number,
    pageCount: number
  ) => IRow[];

  getTotal: (sort: ISortStats, filters: IColumn[]) => number;
}
