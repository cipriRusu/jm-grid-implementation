import { IFilter } from "./Interfaces/GridTools/IFilter";

export class NumberFilter {
  data: any[];
  constructor(data: any[]) {
    this.data = data;
  }

  applyFilters(filters: IFilter[]) {
    filters.forEach((x: IFilter) => {
      this.data = this.data.filter((y: any) => {
        let value = x.value === undefined ? 0 : parseInt(x.value[0]);
        switch (x.operator) {
          case 0:
            return parseInt(y[x.name]) === value;
          case 1:
            return parseInt(y[x.name]) !== value;
          case 2:
            return parseInt(y[x.name]) < value;
          case 3:
            return parseInt(y[x.name]) > value;
          default:
            return parseInt(y[x.name]) === value;
        }
      });
    });

    return this.data;
  }
}
