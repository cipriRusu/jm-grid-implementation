import { IColumn } from "../Interfaces/GridBody/IColumn";
import styled from "styled-components";
import ScreenThresholds from "./ScreenThresholds";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";

export const MainGridColumnsStyled = styled.div<{
  columns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  display: grid;
  grid-column: span ${(props) => props.columns.length};
  white-space: nowrap;
  grid-template-columns: ${(props) =>
    props.columns.map((x) => {
      return x.size + " ";
    })};

  @media (min-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.columns.map((x) => {
        return x.size + " ";
      })};
  }

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.columns
        .filter((x: IColumn) => {
          return x.minVisibility !== MinimumVisibility.MaxVisible;
        })
        .map((x) => {
          return x.size + " ";
        })};

    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }
  }
`;
