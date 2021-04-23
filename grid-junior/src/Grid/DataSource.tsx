import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IDataSource } from "./Interfaces/GridData/IDataSource";
import { IFilter } from "./Interfaces/GridTools/IFilter";
import { dummy_data } from "./JSONData/DummyData";
import { NumberFilter } from "./NumberFilter";
import { StringFilter } from "./StringFilter";

export class DataSource implements IDataSource {
  data: any[];
  constructor() {
    this.data = dummy_data;
  }

  _sort_function(key: string) {
    return function name(a: any, b: any) {
      let x = a[key];
      let y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    };
  }

  getTotal(sort: ISortStats, filters: IFilter[]) {
    let returned_data = Object.create(this.data);

    let string_filters = Array<IFilter>();

    let number_filters = Array<IFilter>();

    if (filters !== undefined) {
      filters.forEach((x: IFilter) => {
        switch (x.type) {
          case undefined:
            string_filters.push(x);
            break;
          case "number":
            number_filters.push(x);
            break;
        }
      });
    }

    if (string_filters.length > 0) {
      returned_data = new StringFilter(returned_data).applyFilters(
        string_filters
      );
    }

    if (number_filters.length > 0) {
      returned_data = new NumberFilter(returned_data).applyFilters(
        number_filters
      );
    }

    if (sort !== undefined) {
      if (sort.field_id) {
        switch (sort.sort_type) {
          case "asc":
            returned_data.sort(this._sort_function(sort.field_id));
            break;
          case "desc":
            returned_data.sort(this._sort_function(sort.field_id)).reverse();
            break;
          default:
            return returned_data.length;
        }
      }
    }

    // if (selectionFilters.length > 0) {
    //   returned_data = returned_data.filter((x: any) => {
    //     return selectionFilters.includes(x.Status);
    //   });
    // }

    return returned_data.length;
  }

  get(sort: ISortStats, filters: IFilter[], page: number, pageIndex: number) {
    let currentPage = page * pageIndex;

    let returned_data = Object.create(this.data);

    let string_filters = Array<IFilter>();

    let number_filters = Array<IFilter>();

    if (filters !== undefined) {
      filters.forEach((x: IFilter) => {
        switch (x.type) {
          case undefined:
            string_filters.push(x);
            break;
          case "number":
            number_filters.push(x);
            break;
        }
      });
    }

    if (string_filters.length > 0) {
      returned_data = new StringFilter(returned_data).applyFilters(
        string_filters
      );
    }

    if (number_filters.length > 0) {
      returned_data = new NumberFilter(returned_data).applyFilters(
        number_filters
      );
    }

    if (sort !== undefined) {
      if (sort.field_id) {
        switch (sort.sort_type) {
          case "asc":
            returned_data.sort(this._sort_function(sort.field_id));
            break;
          case "desc":
            returned_data.sort(this._sort_function(sort.field_id)).reverse();
            break;
          default:
            return returned_data.slice(page, pageIndex);
        }
      }
    }

    // if (selectionFilters.length > 0) {
    //   returned_data = returned_data.filter((x: any) => {
    //     return selectionFilters.includes(x.Status);
    //   });
    // }

    return returned_data.slice(page * pageIndex, currentPage + pageIndex);
  }
}
