import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IColumns } from "./Interfaces/GridTools/IColumns";

export class StringFilter {
  data: IColumns[];
  constructor(data: IColumns[]) {
    this.data = data;
  }

  applyFilters(filters: IColumn[]) {
    filters.forEach((x: any) => {
      this.data = this.data.filter((y: any) => {
        switch (x.operator) {
          case 0:
            return y[x.name].includes(x.value);
          case 1:
            return !y[x.name].includes(x.value);
          case 2:
            return y[x.name].startsWith(x.value);
          case 3:
            return y[x.name].endsWith(x.value);
          case 4:
            return y[x.name] === x.value;
          case 5:
            return y[x.name] !== x.value;
          default:
            return y[x.name].includes(x.value);
        }
      });
    });

    return this.data;
  }
}
