import { MinimumVisibility } from "../../CustomTypes/ColumnVisibility";
import { DataType } from "../../CustomTypes/DataType";
import { ColumnCollapsable } from "../../CustomTypes/ColumnCollapsable";

export interface ICell {
  id?: number;
  cell_key: number;
  cell_type?: DataType;
  cell_content?: string;
  cell_size: string;
  cell_column?: string;
  cell_visibility: MinimumVisibility;
  cell_collapsable: ColumnCollapsable;
  selection_options?: any[];
}
