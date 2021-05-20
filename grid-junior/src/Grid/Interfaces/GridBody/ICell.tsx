import { ColumnVisibility } from "../../../DataSource/CustomTypes/ColumnVisibility";
import { Cell_Type } from "../../CustomTypes/CellType";

export interface ICell {
  id?: number;
  cell_key: number;
  cell_type?: Cell_Type;
  cell_content?: string;
  cell_size: string;
  cell_column?: string;
  cell_visibility: ColumnVisibility[];
  selection_options?: any[];
}
