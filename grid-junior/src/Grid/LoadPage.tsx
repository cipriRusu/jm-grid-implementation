import ScrollDirection from "./GridBody/GridRows/ScrollDirection";
import { IDataSource } from "./Interfaces/GridData/IDataSource";
import { IPageStats } from "./IPageStats";

export class LoadPage {
  dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  getPage(direction: ScrollDirection, pageStats: IPageStats) {
    let scrollingDirection =
      direction === ScrollDirection.Up
        ? pageStats.top
        : direction === ScrollDirection.Down
        ? pageStats.bottom
        : 0;

    return this.dataSource.get(
      pageStats.sort,
      pageStats.filters,
      scrollingDirection,
      pageStats.pageSize
    );
  }
}
