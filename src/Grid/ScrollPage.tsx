import { ISortStats } from "../Grid/Interfaces/ISortStats";
import ScrollDirection from "./GridBody/GridRows/ScrollDirection";
import { IRow } from "./Interfaces/GridBody/IRow";
import { IDataSource } from "./Interfaces/GridData/IDataSource";
import { IFilter } from "./Interfaces/GridTools/IFilter";
import { LoadPage } from "./LoadPage";

export class ScrollPage {
  dataSource: IDataSource;
  loadPage: LoadPage;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
    this.loadPage = new LoadPage(this.dataSource);
  }

  isBottomReached = (event: any) => {
    return (
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight
    );
  };

  scrollUp(
    event: any,
    items: any,
    loadedPages: number,
    top: number,
    bottom: number,
    cacheSize: number,
    pageSize: number,
    sort: ISortStats,
    filters: IFilter[],
    updateTop: (page: number) => void,
    updateBottom: (page: number) => void,
    updateItems: (items: IRow[]) => void,
    updateLoadedPages: (pages: number) => void,
    setOffset: (offset: number) => void
  ) {
    if (event.target.scrollTop === 0) {
      if (top >= 0) {
        setOffset(0);
        let currentCachedItems = items;
        let newCache = this.loadPage.getPage(ScrollDirection.Up, {
          pageSize: pageSize,
          top: top,
          bottom: bottom,
          sort: sort,
          filters: filters,
        });
        let updatedCache = [...newCache, ...currentCachedItems];
        if (updatedCache.length > cacheSize) {
          updatedCache = updatedCache.slice(0, cacheSize);
        }
        document.getElementById(pageSize.toString())?.scrollIntoView();
        updateItems(updatedCache);
        updateLoadedPages(loadedPages - newCache.length);
        updateTop(top - 1);
        updateBottom(bottom - 1);
      }
    }
  }

  scrollDown(
    event: any,
    items: any,
    loadedPages: number,
    top: number,
    bottom: number,
    cacheSize: number,
    pageSize: number,
    sort: ISortStats,
    filters: IFilter[],
    updateTop: (page: number) => void,
    updateBottom: (page: number) => void,
    updateItems: (items: IRow[]) => void,
    updateLoadedPages: (pages: number) => void,
    setOffset: (offset: number) => void,
    offset: number,
    allPages: number
  ) {
    const loadOnScroolDown = (event: any) => {
      const isBottomReached = (event: any) => {
        return (
          event.target.scrollHeight -
            event.target.scrollTop -
            event.target.clientHeight <=
          1
        );
      };

      if (isBottomReached(event)) {
        if (loadedPages + offset < allPages) {
          let currentCachedItems = items;

          let newCache = this.loadPage.getPage(ScrollDirection.Down, {
            pageSize: pageSize,
            top: top,
            bottom: bottom,
            sort: sort,
            filters: filters,
          });

          let updatedCache = currentCachedItems.concat(newCache);

          if (updatedCache.length > cacheSize) {
            updatedCache.splice(0, pageSize);

            document.getElementById(pageSize.toString())?.scrollIntoView();

            if (newCache.length === pageSize) {
              updateTop(top + 1);
            }
          }

          if (newCache.length === pageSize) {
            updateBottom(bottom + 1);
            updateLoadedPages(loadedPages + newCache.length);
            updateItems(updatedCache);
          }

          if (newCache.length < pageSize) {
            let offsetCache = this.loadPage.getPage(ScrollDirection.Down, {
              pageSize: pageSize,
              top: top,
              bottom: bottom,
              sort: sort,
              filters: filters,
            });

            updateItems(items.concat(offsetCache));
            setOffset(offsetCache.length);
          }
        }
      }
    };

    loadOnScroolDown(event);
  }
}
