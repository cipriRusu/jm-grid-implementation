import { IColumnOptions } from "./IColumnOptions";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";
import { ColumnVisibility } from "../CustomTypes/ColumnVisibility";
import { ColumnTypes } from "../CustomTypes/ColumnTypes";

export interface IColumn {
  name: string;
  size: ColumnSizes;
  visibility: ColumnVisibility[];
  type?: ColumnTypes;
  options?: IColumnOptions[];
}
