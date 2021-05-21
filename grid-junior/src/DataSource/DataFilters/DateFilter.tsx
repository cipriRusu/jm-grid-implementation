import { IFilter } from "../../Grid/Interfaces/GridTools/IFilter";

export class DateFilter {
  data: any[];

  constructor(data: any[]) {
    this.data = data;
  }

  applyFilters(filters: IFilter[]) {
    filters.forEach((x: IFilter) => {
      this.data = this.data.filter((y) => {
        switch (x.operator) {
          case 0:
            return (
              new Date(y[x.name]).toDateString() ===
              new Date(x.values[0]).toDateString()
            );
          case 1:
            return new Date(y[x.name]) > new Date(x.values[0]);
          case 2:
            return new Date(y[x.name]) < new Date(x.values[0]);
          case 3:
            return (
              new Date(y[x.name]).toDateString() !==
              new Date(x.values[0]).toDateString()
            );
          case 4:
            return (
              new Date(x.values[0]) <= new Date(y[x.name]) &&
              new Date(y[x.name]) <= new Date(x.values[1])
            );
          default:
            return false;
        }
      });
    });
    return this.data;
  }
}
