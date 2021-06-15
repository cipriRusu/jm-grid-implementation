import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IFilter } from "./Interfaces/GridTools/IFilter";

export interface IPageStats {
  pageSize: number;
  top: number;
  bottom: number;
  sort: ISortStats;
  filters: IFilter[];
}
