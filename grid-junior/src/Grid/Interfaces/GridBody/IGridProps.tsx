import { IHeader } from './IHeader';
import { IRow } from './IRow';

export interface IGridProps {
    items: IRow[];
    headers: IHeader[];
};