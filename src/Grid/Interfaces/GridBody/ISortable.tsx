import { ISortStats } from "./ISortStats";

export interface ISortable {
  sort: ISortStats;
  setSort: (selectedSort: ISortStats) => void;
}
