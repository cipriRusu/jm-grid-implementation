import { IColumnOptions } from "./IColumnOptions";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";
import { ColumnVisibility } from "../CustomTypes/ColumnVisibility";
import { ColumnTypes } from "../CustomTypes/ColumnTypes";
import { ColumnCollapsable } from "../CustomTypes/ColumnCollapsable";

export interface IColumn {
  name: string;
  size: ColumnSizes;
  visibility: ColumnVisibility[];
  collapsable: ColumnCollapsable;
  type?: ColumnTypes;
  options?: IColumnOptions[];
}
