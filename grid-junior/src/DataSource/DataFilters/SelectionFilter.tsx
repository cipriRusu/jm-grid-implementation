import { IFilter } from "../Interfaces/IFilter";

export class SelectionFilter {
  data: any[];

  constructor(data: any[]) {
    this.data = data;
  }

  applyFilters(filters: IFilter[]) {
    filters.forEach((filter: IFilter): void => {
      this.data = this.data.filter((entry: any) => {
        return filter.values?.includes(entry[filter.name]);
      });
    });

    return this.data;
  }
}