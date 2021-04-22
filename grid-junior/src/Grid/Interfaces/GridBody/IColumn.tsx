export interface IColumn {
  name: string;
  size: string;
  filter?: IColumn;
  selectionFilter?: string[];
  type?: string;
  selected?: string;
  value?: string;
  values?: string[];
  operator?: number;
  toggled?: boolean;
  update_selection?: (updated_selection: string[]) => void;
  update_filter?: (updated_filter: IColumn) => void;
}
