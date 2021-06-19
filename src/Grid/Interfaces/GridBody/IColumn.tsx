import { ColumnCollapsable } from "../../CustomTypes/ColumnCollapsable";
import { ColumnSizes } from "../../CustomTypes/ColumnSizes";
import { MinimumVisibility } from "../../CustomTypes/ColumnVisibility";

export interface IColumn {
  name: string;
  size: ColumnSizes;
  collapsable: ColumnCollapsable;
  minVisibility: MinimumVisibility;
  toggled?: boolean;
  type?: string;
  options?: any[];
  side?: string;
}
