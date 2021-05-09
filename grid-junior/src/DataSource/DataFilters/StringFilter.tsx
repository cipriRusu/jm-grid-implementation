import { IFilter } from "../Interfaces/IFilter";

export class StringFilter {
  data: any[];
  constructor(data: any[]) {
    this.data = data;
  }

  applyFilters(filters: IFilter[]) {
    filters.forEach((x: IFilter) => {
      this.data = this.data.filter((y: any) => {
        switch (x.operator) {
          case 0:
            return y[x.name].includes(x.values);
          case 1:
            return !y[x.name].includes(x.values);
          case 2:
            return y[x.name].startsWith(x.values);
          case 3:
            return y[x.name].endsWith(x.values);
          case 4:
            return y[x.name] === x.values;
          case 5:
            return y[x.name] !== x.values;
          default:
            return y[x.name].includes(x.values);
        }
      });
    });
    console.log(this.data);
    return this.data;
  }
}
