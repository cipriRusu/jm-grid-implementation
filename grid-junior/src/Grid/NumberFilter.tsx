import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IColumns } from "./Interfaces/GridTools/IColumns";

export class NumberFilter {
  data: IColumns[];
  constructor(data: IColumns[]) {
    this.data = data;
  }

  applyFilters(filters: IColumn[]) {
    filters.forEach((x: IColumn) => {
      this.data = this.data.filter((y: any) => {
        let value = x.value === undefined ? 0 : parseInt(x.value);
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
