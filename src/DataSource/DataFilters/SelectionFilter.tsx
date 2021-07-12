import { IFilter } from "custom-grid-jm";
import { IColumnOptions } from "custom-grid-jm";

export class SelectionFilter {
  data: any[];

  constructor(data: any[]) {
    this.data = data;
  }

  applyFilters(filters: IFilter[]) {
    filters.forEach((filter: IFilter): void => {
      let all_filters = Array<string>();

      filters.map((x: IFilter) => {
        return x.values.map((y: IColumnOptions) => {
          return all_filters.push(y.name);
        });
      });

      this.data = this.data.filter((entry: any) => {
        return all_filters.includes(entry[filter.name]);
      });
    });

    return this.data;
  }
}
