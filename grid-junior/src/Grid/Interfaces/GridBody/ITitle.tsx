import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IFilter } from "../GridTools/IFilter";

export interface ITitle {
  title: string;
  columns: IColumn[];
  filter: IFilter;
  update_filter: (updated_filter: IFilter) => void;
}
