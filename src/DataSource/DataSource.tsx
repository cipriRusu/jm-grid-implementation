import { BooleanFilter } from "./DataFilters/BooleanFilter";
import { DateFilter } from "./DataFilters/DateFilter";
import { ISortStats } from "../Grid/Interfaces/ISortStats";
import { IDataSource } from "../Grid/Interfaces/IDataSource";
import { IFilter } from "../Grid/Interfaces/GridTools/IFilter";
import { NumberFilter } from "./DataFilters/NumberFilter";
import { SelectionFilter } from "./DataFilters/SelectionFilter";
import { StringFilter } from "./DataFilters/StringFilter";
import { DummyData } from "./GridStructure/DummyData";
import { IHeader } from "../Grid/Interfaces/GridBody/IHeader";

export class DataSource implements IDataSource {
  data: any[];
  constructor(headerData: IHeader[]) {
    this.data = new DummyData().generateDummyData(headerData);
  }

  _sort_function(key: string) {
    return function name(a: any, b: any) {
      let x = a[key];
      let y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    };
  }

  _sort_date_function(key: string) {
    return function compare(a: any, b: any) {
      let dateA = new Date(a[key]);
      let dateB = new Date(b[key]);
      return dateA.getTime() < dateB.getTime()
        ? -1
        : dateA.getTime() > dateB.getTime()
        ? 1
        : 0;
    };
  }

  getHeaders() {}

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
    if (
      filters.some((x: IFilter) => {
        return (
          x.type === "select" && x.values !== undefined && x.values.length > 0
        );
      })
    ) {
      returned_data = new SelectionFilter(returned_data).applyFilters(
        filters.filter((x: IFilter) => {
          return x.type === "select";
        })
      );
    }
    if (
      filters.some((x: IFilter) => {
        return (
          x.type === "boolean" && x.values !== undefined && x.values.length > 0
        );
      })
    ) {
      returned_data = new BooleanFilter(returned_data).applyFilters(
        filters.filter((x: IFilter) => {
          return x.type === "boolean";
        })
      );
    }
    if (
      filters.some((x: IFilter) => {
        return (
          x.type === "date" && x.values !== undefined && x.values.length > 0
        );
      })
    ) {
      returned_data = new DateFilter(returned_data).applyFilters(
        filters.filter((x: IFilter) => {
          return x.type === "date";
        })
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
    if (
      filters.some((x: IFilter) => {
        return (
          x.type === "select" && x.values !== undefined && x.values.length > 0
        );
      })
    ) {
      returned_data = new SelectionFilter(returned_data).applyFilters(
        filters.filter((x: IFilter) => {
          return x.type === "select";
        })
      );
    }
    if (
      filters.some((x: IFilter) => {
        return (
          x.type === "boolean" && x.values !== undefined && x.values.length > 0
        );
      })
    ) {
      returned_data = new BooleanFilter(returned_data).applyFilters(
        filters.filter((x: IFilter) => {
          return x.type === "boolean";
        })
      );
    }
    if (
      filters.some((x: IFilter) => {
        return (
          x.type === "date" && x.values !== undefined && x.values.length > 0
        );
      })
    ) {
      returned_data = new DateFilter(returned_data).applyFilters(
        filters.filter((x: IFilter) => {
          return x.type === "date";
        })
      );
    }
    if (sort !== undefined) {
      if (sort.field_id) {
        switch (sort.sort_type) {
          case "asc":
            switch (sort.field_type) {
              case "date":
                returned_data.sort(this._sort_date_function(sort.field_id));
                break;
              default:
                returned_data.sort(this._sort_function(sort.field_id));
                break;
            }
            break;
          case "desc":
            switch (sort.field_type) {
              case "date":
                returned_data
                  .sort(this._sort_date_function(sort.field_id))
                  .reverse();
                break;
              default:
                returned_data
                  .sort(this._sort_function(sort.field_id))
                  .reverse();
                break;
            }
            break;
          default:
            return returned_data.slice(page, pageIndex);
        }
      }
    }

    return returned_data.slice(page * pageIndex, currentPage + pageIndex);
  }
}
