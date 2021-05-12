import ScrollDirection from "./GridBody/GridRows/ScrollDirection";
import { ISortStats } from "./Interfaces/GridBody/ISortStats";
import { IDataSource } from "./Interfaces/GridData/IDataSource";
import { IFilter } from "./Interfaces/GridTools/IFilter";

export class LoadPage {
  dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  getPage(
    pageSize: number,
    direction: ScrollDirection,
    top: number,
    bottom: number,
    sort: ISortStats,
    filters: IFilter[]
  ) {
    let scrollingDirection =
      direction === ScrollDirection.Up
        ? top
        : direction === ScrollDirection.Down
        ? bottom
        : 0;

    return this.dataSource.get(sort, filters, scrollingDirection, pageSize);
  }
}
