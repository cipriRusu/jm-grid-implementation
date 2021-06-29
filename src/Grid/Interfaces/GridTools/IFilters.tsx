import { IColumn } from "../GridBody/IColumn";

export interface IFilters {
  selectedFilterContext: IColumn;
  setFilter: (value: {}) => void;
}
