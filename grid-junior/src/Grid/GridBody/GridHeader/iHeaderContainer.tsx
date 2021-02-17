import { Dispatch, SetStateAction } from 'react';
import { ColumnData } from './ColumnData';

export interface iHeaderContainer {
    clickState: number;
    updateClickState: (newValue: number) => void;
    headValue: string;
    columnValues: Array<ColumnData>;
}
