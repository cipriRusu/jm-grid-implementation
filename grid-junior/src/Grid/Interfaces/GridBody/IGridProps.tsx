import { IDataType } from '../GridData/IDataType';
import { IHeader } from './IHeader';

export interface IGridProps {
    data: IDataType,
    headers: IHeader[];
};