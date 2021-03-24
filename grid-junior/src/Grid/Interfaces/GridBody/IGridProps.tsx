import { IDataSource } from '../GridData/IDataSource';
import { IHeader } from './IHeader';

export interface IGridProps {
    data: IDataSource,
    headers: IHeader[];
};