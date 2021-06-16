import styled from "styled-components";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import ScreenThresholds from "./ScreenThresholds";

const GridTitle = styled.div<{ columns: IColumn[] }>`
  @media (min-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    display: ${(props) => {
      return props.columns.filter((x: IColumn) => {
        return x.minVisibility !== MinimumVisibility.Invisible;
      }).length > 0
        ? "grid"
        : "none";
    }};

    grid-column: ${(props) => {
      return (
        "span " +
        props.columns.filter((x: IColumn) => {
          return x.minVisibility !== MinimumVisibility.Invisible;
        }).length
      );
    }};
  }

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    display: ${(props) => {
      return props.columns.filter((x: IColumn) => {
        return (
          x.minVisibility !== MinimumVisibility.Invisible &&
          x.minVisibility !== MinimumVisibility.MaxVisible
        );
      }).length > 0
        ? "block"
        : "none";
    }};

    grid-column: ${(props) => {
      return (
        "span " +
        props.columns.filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.Invisible &&
            x.minVisibility !== MinimumVisibility.MaxVisible
          );
        }).length
      );
    }};
  }

  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    display: ${(props) => {
      return props.columns.filter((x: IColumn) => {
        return (
          x.minVisibility !== MinimumVisibility.Invisible &&
          x.minVisibility !== MinimumVisibility.MaxVisible &&
          x.minVisibility !== MinimumVisibility.LargeVisible
        );
      }).length > 0
        ? "block"
        : "none";
    }};

    grid-column: ${(props) => {
      return (
        "span " +
        props.columns.filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.Invisible &&
            x.minVisibility !== MinimumVisibility.MaxVisible &&
            x.minVisibility !== MinimumVisibility.LargeVisible
          );
        }).length
      );
    }};
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    display: none;
  }

  background-color: black;
`;

export default GridTitle;
