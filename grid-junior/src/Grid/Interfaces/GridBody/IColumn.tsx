import { ColumnSizes } from "../../CustomTypes/ColumnSizes";
import { ColumnVisibility } from "../../CustomTypes/ColumnVisibility";

export interface IColumn {
  name: string;
  size: ColumnSizes;
  visibility: ColumnVisibility[];
  toggled?: boolean;
  type?: string;
  options?: any[];
}
