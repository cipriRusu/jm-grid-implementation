import styled from "styled-components";
import ScreenThresholds from "./ScreenThresholds";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";

const MainGrid = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  overflow-y: scroll;
  background-color: gray;
  flex: 1;

  @media (min-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    display: grid;
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x) => {
          return x.minVisibility !== MinimumVisibility.Invisible;
        })
        .map((x) => {
          return x.size + " ";
        })};

    grid-template-rows: 1.6rem 1.6rem repeat(
        auto-fit,
        minmax(max-content, 5rem)
      );
  }

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    display: grid;
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.Invisible &&
            x.minVisibility !== MinimumVisibility.MaxVisible
          );
        })
        .map((x: IColumn) => {
          return x.size + " ";
        })};

    grid-template-rows: 1.6rem 1.6rem repeat(
        auto-fit,
        minmax(max-content, 5rem)
      );
  }

  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    display: grid;
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.Invisible &&
            x.minVisibility !== MinimumVisibility.MaxVisible &&
            x.minVisibility !== MinimumVisibility.LargeVisible
          );
        })
        .map((x: IColumn) => {
          return x.size + " ";
        })};

    grid-template-rows: 1.6rem repeat(auto-fit, minmax(max-content, 5rem));
  }

  .display-extended-row {
    display: block;
  }
`;

export default MainGrid;
