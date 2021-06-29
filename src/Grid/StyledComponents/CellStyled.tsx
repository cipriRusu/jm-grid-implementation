import styled from "styled-components";
import { DataType } from "../CustomTypes/DataType";
import { ColumnTypes } from "../CustomTypes/ColumnTypes";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import ScreenThresholds from "./ScreenThresholds";

export const CellStyled = styled.div<{
  allColumns: IColumn[];
  cell_type: DataType;
}>`
  @media (min-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    .cell {
      display: grid;
      margin: 1rem;
      grid-auto-flow: column;
      min-width: 5rem;
      word-break: break-all;
      word-wrap: break-word;
    }

    .boolean-cell {
      .fa {
        margin-left: 1rem;
      }
    }
  }

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    .cell {
      display: grid;
      margin: 1rem;
      grid-auto-flow: column;
      word-break: break-all;
      word-wrap: break-word;
    }
  }

  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    ${(props) =>
      props.cell_type === ColumnTypes.select && `grid-row: span 100;`}
    .cell {
      display: grid;
      margin: 0.5rem 0rem 0.5rem 0.5rem;
      grid-auto-flow: column;
      word-break: break-all;
      word-wrap: break-word;
    }

    .selection-cell {
      display: flex;
      .selection-cell-text {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    .row-container {
      .row {
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: solid thin;
        .cell {
          padding: 0px;
        }
      }
    }
  }
`;
