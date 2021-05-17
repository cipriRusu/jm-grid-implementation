import styled from "styled-components";
import ScreenThresholds from "./ScreenThresholds";
import { IColumn } from "../Interfaces/GridBody/IColumn";

const MainGrid = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.inputColumns.map((x) => {
      return props.inputSizes[x.size] + " ";
    })};

  grid-template-rows: repeat(22, 1fr);
  height: 38rem;
  overflow-y: scroll;
  background-color: gray;

  @media (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    .SmallColumn {
      display: none;
    }

    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return x.size !== "SmallColumn";
        })
        .map((x: IColumn) => {
          return props.inputSizes[x.size] + " ";
        })};
  }
`;

export default MainGrid;
