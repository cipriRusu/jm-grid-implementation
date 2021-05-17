import { IColumn } from "./Interfaces/GridBody/IColumn";
import styled from "styled-components";
import ScreenThresholds from "./ScreenThresholds";

export const MainGridColumnsStyled = styled.div<{
  columns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  display: grid;
  grid-column: span ${(props) => props.columns.length};
  grid-template-columns: ${(props) =>
    props.columns.map((x) => {
      return props.inputSizes[x.size] + " ";
    })};

  @media (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.columns
        .filter((x: IColumn) => {
          return x.size !== "SmallColumn";
        })
        .map((x) => {
          return props.inputSizes[x.size] + " ";
        })};
  }
`;
