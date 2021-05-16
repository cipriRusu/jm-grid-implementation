import styled from "styled-components";
import ScreenThresholds from "./ScreenThresholds";

const GridColumn = styled.div`
  background-color: black;

  @media (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    .SmallColumn {
      display: none;
    }
  }

  @media (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    display: none;
  }
`;

export default GridColumn;
