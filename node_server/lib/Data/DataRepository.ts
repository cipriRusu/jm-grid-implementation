import { DummyData } from "./DummyData";
import { initialHeaders } from "./CurrentHeaders";
import { ISortStats } from "custom-grid-jm/Grid/Interfaces/GridBody/ISortStats";
import QueryString from "qs";
import { IFilter } from "custom-grid-jm/Grid/Interfaces/GridTools/IFilter";
import { StringFilter } from "./DataFilters/StringFilter";
import { NumberFilter } from "./DataFilters/NumberFilter";
import { SelectionFilter } from "./DataFilters/SelectionFilter";
import { BooleanFilter } from "./DataFilters/BooleanFilter";
import { DateFilter } from "./DataFilters/DateFilter";

export class DataRepository {
  allData = [] as any;
  constructor() {
    this.allData = new DummyData().generateDummyData(initialHeaders);
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

  getCount(query: QueryString.ParsedQs) {
    let returned_data = Object.create(this.allData);

    let params_object = JSON.parse(
      decodeURIComponent(query.params?.toString() || "")
    );

    let sort = {} as ISortStats;
    let filters = {} as IFilter[];

    sort.field_id = params_object.sort.field_id;
    sort.field_type = params_object.sort.field_type;
    sort.sort_type = params_object.sort.sort_type;
    filters = params_object.filters;

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

    return returned_data.length;
  }

  get(query: QueryString.ParsedQs) {
    let returned_data = Object.create(this.allData);

    let params_object = JSON.parse(
      decodeURIComponent(query.params?.toString() || "")
    );

    let page = params_object.page as unknown as number;
    let pageindex = params_object.pageIndex as unknown as number;

    let currentPage = page * pageindex;
    let sort = {} as ISortStats;
    let filters = {} as IFilter[];

    sort.field_id = params_object.sort.field_id;
    sort.field_type = params_object.sort.field_type;
    sort.sort_type = params_object.sort.sort_type;
    filters = params_object.filters;

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
            returned_data.sort(this._sort_function(sort.field_id)).reverse();
            break;
        }
      default:
        returned_data.slice(page, pageindex);
        break;
    }

    return returned_data.slice(page * pageindex, +currentPage + +pageindex);
  }
}
