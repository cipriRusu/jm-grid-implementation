export interface IColumn {
  name: string;
  size: string;
  type?: string;
  value?: string;
  options?: string[];
  operator?: number;
  toggled?: boolean;
}
