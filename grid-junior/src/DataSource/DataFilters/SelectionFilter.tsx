import { IFilter } from "../Interfaces/IFilter";

export class SelectionFilter {
  data: any[];

  constructor(data: any[]) {
    this.data = data;
  }

  applyFilters(filters: IFilter[]) {
    filters.forEach((filter: IFilter): void => {
      let all_filters = Array<string>();

      for (let key in filter.values) {
        for (let object_key in filter.values[key]) {
          all_filters.push(object_key);
        }
      }

      this.data = this.data.filter((entry: any) => {
        return all_filters.includes(entry[filter.name]);
      });
    });

    return this.data;
  }
}
