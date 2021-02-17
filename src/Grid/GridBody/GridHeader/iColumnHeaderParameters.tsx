import { Dispatch, SetStateAction } from "react";

export interface iColumnHeaderParameters {
  columnWidth: string;
  columnName: string;
  clickState: number;
  updateClickState: (newValue: number) => void;
}
