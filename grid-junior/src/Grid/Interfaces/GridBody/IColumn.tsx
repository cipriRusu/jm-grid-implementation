export interface IColumn {
  name: string;
  size: string;
  type?: string;
  selected?: string;
  value?: string;
  values?: string[];
  operator?: number;
  toggled?: boolean;
}
