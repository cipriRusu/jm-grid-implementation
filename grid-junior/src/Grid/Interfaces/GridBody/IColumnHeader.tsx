import { ISortable } from '../GridBody/ISortable';

export interface IColumnHeader extends ISortable {
  column_size: string;
  column_name: string;
}
