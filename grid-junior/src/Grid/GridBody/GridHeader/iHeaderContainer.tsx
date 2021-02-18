import { Dispatch, SetStateAction } from 'react';
import { ColumnData } from './ColumnData';

export interface iHeaderContainer {
    headValue: string;
    columnValues: Array<ColumnData>;
}
