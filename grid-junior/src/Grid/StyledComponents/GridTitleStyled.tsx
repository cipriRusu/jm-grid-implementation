import styled from "styled-components";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import ScreenThresholds from "./ScreenThresholds";

const GridTitle = styled.div<{ columns: IColumn[] }>`
  display: ${(props) => (props.columns.length > 0 ? "block" : "none")};

  grid-column: ${(props) => {
    return (
      "span " +
      props.columns.filter((x: IColumn) => {
        return x.minVisibility !== MinimumVisibility.Invisible;
      }).length
    );
  }};

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-column: ${(props) => {
      return (
        "span " +
        props.columns.filter((x: IColumn) => {
          return x.minVisibility !== MinimumVisibility.MaxVisible;
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
