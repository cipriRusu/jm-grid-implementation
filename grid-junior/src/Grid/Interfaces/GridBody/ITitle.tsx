import { IColumn } from "../../Interfaces/GridBody/IColumn";

export interface ITitle {
  title: string;
  columns: IColumn[];
  filter?: IColumn;
  selectionFilter: string[];
  update_selection: (updated_selection: string[]) => void;
  update_filter?: (updated_filter: IColumn) => void;
}
