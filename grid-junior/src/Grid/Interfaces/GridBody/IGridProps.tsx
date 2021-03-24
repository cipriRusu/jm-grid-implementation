import { IDataType } from '../GridData/IDataSource';
import { IHeader } from './IHeader';

export interface IGridProps {
    data: IDataType,
    headers: IHeader[];
};