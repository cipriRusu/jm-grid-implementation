import { IFilter } from "./Interfaces/GridTools/IFilter";

export class BooleanFilter {
  data: IFilter[];
  constructor(data: IFilter[]) {
    this.data = data;
  }

  applyFilters(filters: IFilter[]) {
    filters.forEach((filter: IFilter) => {
      this.data = this.data.filter((entry: any) => {
        return filter.boolean?.includes(entry[filter.name]);
      });
    });
    return this.data;
  }
}
