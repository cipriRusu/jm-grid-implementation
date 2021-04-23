import { IFilter } from "./Interfaces/GridTools/IFilter";

export class StringFilter {
  data: IFilter[];
  constructor(data: IFilter[]) {
    this.data = data;
  }

  applyFilters(filters: IFilter[]) {
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
