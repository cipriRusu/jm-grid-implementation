import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import ScreenThresholds from "./ScreenThresholds";

const GridTitle = styled.div<{ columns: IColumn[] }>`
  grid-column: ${(props) => {
    return "span " + props.columns.length;
  }};

  @media (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-column: ${(props) => {
      return (
        "span " +
        props.columns.filter((x: IColumn) => {
          return x.size !== "SmallColumn";
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