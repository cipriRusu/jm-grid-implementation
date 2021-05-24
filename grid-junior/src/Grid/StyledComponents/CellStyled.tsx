import styled from "styled-components";
import { Cell_Type } from "../CustomTypes/CellType";
import { ColumnTypes } from "../CustomTypes/ColumnTypes";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import ScreenThresholds from "./ScreenThresholds";

export const CellStyled = styled.div<{
  allColumns: IColumn[];
  cell_type: Cell_Type;
}>`
  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    grid-column: ${(props) => {
      return props.allColumns[0].type === ColumnTypes.select &&
        props.allColumns.length > 1 &&
        props.cell_type === ColumnTypes.select
        ? 1
        : 2;
    }};
  }
`;
