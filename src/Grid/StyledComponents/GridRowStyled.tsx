import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IHeader } from "../Interfaces/GridBody/IHeader";
import ScreenThresholds from "./ScreenThresholds";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";

const GridRowStyled = styled.div<{
  inputColumns: IColumn[];
  inputTitles: IHeader[];
}>`
  grid-column: span ${(props) => props.inputColumns.length};
  display: grid;
  border-bottom: solid;
  border-width: thin;
  border-color: darkgray;
  background-color: #404444;
  color: white;
  :hover {
    background-color: #595f5f;
    cursor: pointer;
  }

  @media (min-device-width: 2000px), (min-device-height: 1000px) {
    height: 10vh;
  }

  @media (min-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return x.minVisibility !== MinimumVisibility.Invisible;
        })
        .map((x) => {
          return `${x.size + " "}`;
        })};
  }

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.MaxVisible &&
            x.minVisibility !== MinimumVisibility.Invisible
          );
        })
        .map((x) => {
          return `${x.size + " "}`;
        })};

    .${MinimumVisibility.MaxVisible} {
      display: none;
    }
  }

  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.Invisible &&
            x.minVisibility !== MinimumVisibility.MaxVisible &&
            x.minVisibility !== MinimumVisibility.LargeVisible
          );
        })
        .map((x) => {
          return `${x.size + " "}`;
        })};

    .${MinimumVisibility.MaxVisible} {
      display: none;
    }

    .${MinimumVisibility.LargeVisible} {
      display: none;
    }
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;

    .${MinimumVisibility.MaxVisible} {
      display: none;
    }

    .${MinimumVisibility.LargeVisible} {
      display: none;
    }

    .${MinimumVisibility.MediumVisible} {
      display: none;
    }
  }

  .${MinimumVisibility.Invisible} {
    display: none;
  }
`;

export default GridRowStyled;
