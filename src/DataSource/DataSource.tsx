import { ISortStats } from "custom-grid-jm/Grid/Interfaces/ISortStats";
import { IDataSource } from "../Grid/Interfaces/GridData/IDataSource";
import { IFilter } from "custom-grid-jm/Grid/Interfaces/GridTools/IFilter";

export class DataSource implements IDataSource {
  async getTotal(sort: ISortStats, filters: IFilter[]) {
    var url = new URL("http://localhost:4000/userCount");

    let jsonStats = {
      sort: {} as ISortStats,
      filters: [] as IFilter[],
    };

    jsonStats.sort.field_id = sort.field_id;
    jsonStats.sort.field_type = sort.field_type;
    jsonStats.sort.sort_type = sort.sort_type;

    filters.forEach((x: IFilter) => {
      jsonStats.filters.push({
        name: x.name,
        type: x.type,
        values: x.values,
        operator: x.operator,
      });
    });

    var params = [["params", encodeURIComponent(JSON.stringify(jsonStats))]];

    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }

  async get(
    sort: ISortStats,
    filters: IFilter[],
    page: number,
    pageIndex: number
  ) {
    var url = new URL("http://localhost:4000/users");

    let jsonStats = {
      page: 0,
      pageIndex: 0,
      sort: {} as ISortStats,
      filters: [] as IFilter[],
    };

    jsonStats.sort.field_id = sort.field_id;
    jsonStats.sort.field_type = sort.field_type;
    jsonStats.sort.sort_type = sort.sort_type;

    jsonStats.page = page;
    jsonStats.pageIndex = pageIndex;

    filters.forEach((x: IFilter) => {
      jsonStats.filters.push({
        name: x.name,
        type: x.type,
        values: x.values,
        operator: x.operator,
      });
    });

    var params = [["params", encodeURIComponent(JSON.stringify(jsonStats))]];

    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
