import styled from "styled-components";
import { Cell_Type } from "../CustomTypes/CellType";
import { ColumnTypes } from "../CustomTypes/ColumnTypes";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import ScreenThresholds from "./ScreenThresholds";

export const CellStyled = styled.div<{
  allColumns: IColumn[];
  cell_type: Cell_Type;
}>`
  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    ${(props) => props.cell_type === ColumnTypes.select && `grid-row: span 2;`}
  }
`;
