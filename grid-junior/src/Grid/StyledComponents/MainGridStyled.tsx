import styled from "styled-components";
import ScreenThresholds from "./ScreenThresholds";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";

const MainGrid = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.inputColumns.map((x) => {
      return x.size + " ";
    })};

  grid-template-rows: repeat(22, 1fr);
  height: 38rem;
  overflow-y: scroll;
  background-color: gray;

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return x.minVisibility !== MinimumVisibility.MaxVisible;
        })
        .map((x: IColumn) => {
          return x.size + " ";
        })};
  }
`;

export default MainGrid;
