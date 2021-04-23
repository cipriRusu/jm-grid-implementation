import { IFilter } from "../GridTools/IFilter";

export interface IColumn {
  name: string;
  size: string;
  filter?: IFilter;
  type?: string;
  selected?: string;
  value?: string;
  values?: string[];
  operator?: number;
  toggled?: boolean;
  update_filter?: (updated_filter: IFilter) => void;
}
