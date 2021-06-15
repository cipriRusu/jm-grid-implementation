import { IRow } from "./GridBody/IRow";
import { ISortStats } from "./ISortStats";
import { IFilter } from "../Interfaces/GridTools/IFilter";

export interface IDataSource {
  get: (
    sort: ISortStats,
    filters: IFilter[],
    page: number,
    pageCount: number
  ) => IRow[];

  getTotal: (sort: ISortStats, filters: IFilter[]) => number;
}
