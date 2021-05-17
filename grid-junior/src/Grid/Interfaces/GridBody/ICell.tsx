import { Cell_Type } from "../../CustomTypes/CellType";

export interface ICell {
  id?: number;
  cell_key: number;
  cell_type?: Cell_Type;
  cell_content?: string;
  cell_size: string;
  cell_column?: string;
  selection_options?: any[];
}
