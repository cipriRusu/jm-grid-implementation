import { Cell_Type } from "../../CustomTypes/Cell_Type";

export interface ICell {
  cell_key: number;
  cell_type?: Cell_Type;
  cell_content?: string;
  selection_options?: string[];
}
