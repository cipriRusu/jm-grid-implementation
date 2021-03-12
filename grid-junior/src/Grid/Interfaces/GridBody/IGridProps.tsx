import { IHeader } from './IHeader';
import { IGridEntry } from '../GridBody/IGridEntry';

export interface IGridProps {
    items: IGridEntry[];
    headers: IHeader[];
};