import { ColumnVisibility } from "../../CustomTypes/ColumnVisibility";
import { Cell_Type } from "../../CustomTypes/CellType";
import { ColumnCollapsable } from "../../CustomTypes/ColumnCollapsable";

export interface ICell {
  id?: number;
  cell_key: number;
  cell_type?: Cell_Type;
  cell_content?: string;
  cell_size: string;
  cell_column?: string;
  cell_visibility: ColumnVisibility[];
  cell_collapsable: ColumnCollapsable;
  selection_options?: any[];
}
